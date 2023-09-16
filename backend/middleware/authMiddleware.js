const db = require('../database/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// USER ATHENICATION
exports.isLoggedIn = async (req, res, next) => {
    if(req.cookies.jwt){

        try {     
            const decoded = await jwt.verify(req.cookies.jwt, process.env.JWT_SECRET)
            // console.log(decoded)
            //  const dID = decoded.id
             //console.log(dID)
             db.query("SELECT * FROM users WHERE id = ? ", [decoded.id], async(error, authData)=>{
                if(error){
                    // throw error;
                    return res.json({status : "Error", " Error": 'Failed to fetch cookie data'})
                  }
                  if(!authData.length){
                    res.json({status : "Error", " Error": 'Failed to fetch cookie data'})
                    // return next();
                  }
                  
                  req.user = authData[0]
                  //console.log(req.user)
              next();
             })

        } catch (error) {
            // console.log(error)
          return  res.json({status : "Error", " Error": 'Failed to fetch cookie data'})
            // next();
        }
    }else{
       return res.json({status : "Error", " Error": 'session failed'})
        // next()
    }
}
          

//AUTHORIZATION FOR ADMIN
exports.isAdmin = async(req, res, next)=>{
    const {role} = req.user
 db.query('SELECT role FROM users WHERE users.role = ?', [role] ,(error, data2) =>{
    if(data2[0].role !== 'admin'){
        return res.json({status : "Error", " Error": 'Forbidden!! Error while accessing restricted area '})
    }
   // console.log(data2)
     req.admin = data2[0]
        next()
 })
}



//ISLOGGEDIN  AND ADMIN AUTH TO BLOCK A USER 
// exports.isBlocked = async(req, res, next)=>{
// try{
//    const {role} = req.admin
//     console.log(role)
//     if( role !== 'admin'){
//       return res.json({status : "Error", " Error": " you are not allowed to run such operation"})
//     }
//     req.block = req.admin
//         next()

// }
//  catch(error){
// console.log(error)
// }


// }
            