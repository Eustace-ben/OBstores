const db = require('../database/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const {promisify} = require('util')
require('dotenv').config();



//GET ALL USERS NOT INCLUDING ADMIN
exports.displayUsers = async(req, res)=>{
  //SELECT * FROM `users` WHERE `users`.`role` = 'user' LIMIT 2;

  db.query('SELECT * FROM users WHERE users.role = ?', ['user'], (error, data) =>{
    if(!error){
      console.log(data) 
     return res.json({status : "success", data})   
    }else{
     return res.json({status : "Error", "Error" : ' Failed to retrieve Data'})
    }
  })
}



//GET USER ACCOUNT
exports.displayUserProfile = async(req, res)=>{

 if(req.user){
 try {
      db.query('SELECT * FROM users WHERE id = ? ', [req.user.id], async(err, data)=>{
        if(err){
          return res.json({status : "Error", "Error" : ' Error while retrieving  Data'})
        }
          // return res.json({status : "success", data})    
          return res.json({status : "success", data})   
      })
    } catch (error) {
      console.log(error)
    }
 }else{
  res.send("go login")
 }
}


//UPDATE A USER
exports.updateUser = async(req, res)=>{
  const name = req.body.name;
  const gender = req.body.gender;
  const email = req.body.email;
  console.log(name)
  console.log(gender)
  console.log(email)
  const {id} = req.params;
    
  db.query("UPDATE users SET name = ?, gender =?, email = ? WHERE id = ?", [name, gender, email, id],(err, data)=>{
    if(err){
      return res.json({status: 'Error', "Error": "Failed to Update your details"})
    }else{
      console.log(data)
      return res.json({status : "success",data})
    }
  })
}


//DELETE A USER
exports.deleteUser = (req, res)=>{
  const {id} = req.params;
  db.query('DELETE FROM users WHERE users.id = ? ', [id], (error, data1)=>{
    if(error){
      return res.json({status : "Error", "Error" : ' Failed to Delete Data'})
    }else{
       console.log(data1)
       return res.json({status : "success"})
    }
  })
}



//REGISTER A USER
exports.register = async(req, res) =>{
const name = req.body.name;
const gender = req.body.gender;
const email = req.body.email;
const password = req.body.password;
const cPassword = req.body.cPassword;

 if(!name || !gender || !email || !password || !cPassword){
  return res.send( { status: "Error", Error : "Complete all fields"} )
 }
 if(password !== cPassword){
  return res.send( { status: "Error", Error : "Passwords dont match!"} )
 }
 const hashedPwd = await bcrypt.hash(password, 8);
 
  db.query('SELECT * FROM users WHERE email = ? ', [email], (err, result) =>{
    if(err){
      return res.send( { status: "Error", Error : "Error occured, please try again later!"} )
    }
    if(result.length > 0){
      return res.send( { status: "Error", Error : "Email Alreday In Use"} )
    }else{
        db.query('INSERT INTO users SET name = ?, gender = ?, email = ?, password = ? ', [ name, gender, email,hashedPwd ], (err, data)=>{
          if(!err){
            console.log(data)
            return res.send( { status: "Success"} )
          
          }else{
            return res.send( { status: "Error", Error : "Error occured while saving data!"} )
          }
        })
    }
  })
}



//SIGN IN USER 
exports.login = async(req, res)=>{
const email = req.body.email;
const password = req.body.password;

  if(!email || !password){
   return res.json({status : "Error", Error : "Enter your Email and Password "})
  }
  db.query('SELECT * FROM users WHERE email = ?', [email], async(error, data) =>{
    if(error){
      return res.json({status : "Error", Error : "error! Unable to your retrieve information."})
    }
    if(!data.length ){
      return res.json({status : "Error", Error : "Email or Password incorrect"})
    }
    const Cpassword = await bcrypt.compare(password, data[0].password);

    if( !Cpassword ){
      return res.json({status : "Error", Error : "Email or Password incorrect"})
    }else{
     // return res.json({status : "success"})
     //CREATE A TOEKN
      const id = data[0].id;
      const token = jwt.sign({id}, process.env.JWT_SECRET, {expiresIn : process.env.JWT_EXPIRESIN})

      const cookieOptions = {
        expires: new Date( Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly : true
      }
      res.cookie("jwt", token, cookieOptions);
      req.role = data[0].role
      return res.json({status : "success",data,role:req.role })
  
    }
  })
}


//LOGOUT USER

exports.logout = (req, res)=>{
  if(req.cookies.jwt){
    res.clearCookie('jwt')
  }
    return res.json({status : "success"})
}