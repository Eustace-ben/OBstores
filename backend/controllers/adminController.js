const db = require('../database/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();




//ADMIN LOGIN
exports.login = async(req, res) =>{
if(!req.user){
    return res.json({status :  "LError" , Error:  " login first"})
  }else{

    const email = req.body.email
    const adminAccesstoken = req.body.adminAccesstoken;
//  console.log(email, adminAccesstoken)
 if(!email || !adminAccesstoken){
    return res.json({status :  "Error" , Error:  " Provide Your Access token"})
 }
 try {
    db.query('SELECT * FROM users WHERE email = ?', [email], async(error, data)=> {
         if(error){
            throw error;
          //  res.json({status : "Error", Error : "Failed Query Try Again Later"})
         }
        //  console.log(data)
         if(!email){
           return res.json({status : "Error", Error : "Invalid Email Address"})
         }
            const CompareAAT = await bcrypt.compare(adminAccesstoken, data[0].aat);
          //  console.log(CompareAAT)
            if(!CompareAAT ){
                return res.json({status : "Error", Error : "Access denied you will be restricted after 2 trials"})
              }else{
                return  res.json({status : "success", data})
              }
    })
 } catch (error) {
    console.log(error)
  }   
 }
}


//PROTECT ADMIN ROUTE 
exports.proute = async(req, res)=>{

  if(req.user){
  //  const {id} = req.user;
   const {role} = req.admin
  try {
       db.query('SELECT id,role FROM users WHERE role = ? ', [role], async(err, roleData)=>{
         if(err){
           return res.json({status : "Error", "Error" : ' Error while retrieving  Data'})
         } 
          // console.log(roleData)
           return res.json({status : "success", roleData})   
       })
     } catch (error) {
       console.log(error)
     }
  }else{
   res.send("go login")
  }
 }



//GET ADMIN ACCOUNT
exports.displayadminprofile = async(req, res)=>{

  if(req.user){
  try {
       db.query('SELECT * FROM users WHERE id = ? ', [req.user.id], async(err, data)=>{
         if(err){
           return res.json({status : "Error", "Error" : ' Error while retrieving  Data'})
         } 
          // console.log(data)
           return res.json({status : "success", data})   
       })
     } catch (error) {
       console.log(error)
     }
  }else{
   res.send("go login")
  }
 }