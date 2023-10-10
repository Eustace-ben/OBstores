const db = require('../database/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();




//ADMIN LOGIN
exports.login = async (req, res) => {
  if (!req.user) {
    return res.json({ status: "LError", Error: " login first" })
  } else {

    const email = req.body.email
    const adminAccesstoken = req.body.adminAccesstoken;
    //  console.log(email, adminAccesstoken)
    if (!email || !adminAccesstoken) {
      return res.json({ status: "Error", Error: " Provide Your Access token" })
    }
    try {
      db.query('SELECT * FROM users WHERE email = ?', [email], async (error, data) => {
        if (error) {
          throw error;
          //  res.json({status : "Error", Error : "Failed Query Try Again Later"})
        }
        //  console.log(data)
        if (!email) {
          return res.json({ status: "Error", Error: "Invalid Email Address" })
        }
        const CompareAAT = await bcrypt.compare(adminAccesstoken, data[0].aat);
        //  console.log(CompareAAT)
        if (!CompareAAT) {
          return res.json({ status: "Error", Error: "Access denied you will be restricted after 2 trials" })
        } else {
          return res.json({ status: "success", data })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}


//PROTECT ADMIN ROUTE 
exports.proute = async (req, res) => {

  if (req.user) {
    //  const {id} = req.user;
    const { role } = req.admin
    try {
      db.query('SELECT id,role FROM users WHERE role = ? ', [role], async (err, roleData) => {
        if (err) {
          return res.json({ status: "Error", Error: ' Error while retrieving  Data' })
        }
        return res.json({ status: "success", roleData })
      })
    } catch (error) {
      console.log(error)
    }
  } else {
    res.send("go login")
  }
}



//GET ADMIN ACCOUNT
exports.displayadminprofile = async (req, res) => {
  if (req.user) {
    try {
      db.query('SELECT id, name, gender, role FROM users WHERE id = ? ', [req.user.id], async (err, data) => {
        if (err) {
          return res.json({ status: "Error", Error: ' Error while retrieving  Data' })
        }
        return res.json({ status: "success", data })
      })
    } catch (error) {
      console.log(error)
    }
  } 
}

// ADMIN DISPLAY ALL USERS
exports.allusers = async (req, res) => {
  if (req.user) {
    try {
      db.query('SELECT * FROM users', async (error, data) => {
        if (error) {
          return res.json({ status: "Error", Error: ' Error while retrieving  Data' })
        }
        return res.json({ status: "success", data })
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// ADMIN DISPLAY RECENT USERS
exports.recentusers = async (req, res) => {
  if (req.user) {
    try {
      db.query('SELECT id, name, gender, email, Date_time FROM users WHERE Date_time >= DATE_SUB(NOW(), INTERVAL 21 DAY)', async (error, data) => {
        if (error) {
          return res.json({ status: "Error", Error: ' Error while retrieving  Data' })
        } 
        if(data.length >= 1){
      
         return res.json({ status: "success", data })
        }else{
      
             return res.json({ status: "empty", message: " there is no data" })
        }

      })
    } catch (error) {
      console.log(error)
    }
  }
}
// ADMIN UPDATE USER
exports.editusers = async (req, res) => {
  if (req.user) {
    const { id } = req.params;
    const { name, gender, email, isBlocked } = req.body;
    try {
      db.query('UPDATE users SET name = ?, gender =?, email = ?, isBlocked = ? WHERE id = ?', [name, gender, email, isBlocked, id], (error, data) => {
        if (error) {
          return res.json({ status: "Error", Error: ' Error while running Query' })
        }
        return res.json({ status: "success", data })
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// ADMIN DELETE USER
exports.deleteuser = async (req, res) => {
  if (req.user) {
    const { id } = req.params;
    try {

      db.query('DELETE FROM users WHERE id = ? ', [id], (error, data) => {
        if (error) {
          return res.json({ status: "Error", Error: ' Failed to Delete User' })
        } else {
          console.log(data)
          return res.json({ status: "success" })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

//CREATE USER 
// REMIND ME TO ADD  AAT(ACCESS TOKEN ) WHEN CHANGED TO ADMIN
exports.changerole = async (req, res) => {
  if (req.user) {
    const { id } = req.params
    const role = req.body.role;
    try {
      db.query('UPDATE users SET role = ? WHERE id = ?', [role, id], (err, data) => {
        if (err) {
          return res.json({ status: "Error", Error: "Couldnt execute query" })
        } else {
          return res.json({ status: "success" })
        }

      })
    } catch (error) {
      console.log(error)
    }
  }
}

//ADMIN BLOCK A USER
exports.blockandunblock = async (req, res) => {
  if (req.user) {
    const { id } = req.params;
    const block = req.body.block;
    try {
      db.query(' UPDATE users SET isBlocked = ? WHERE id = ?', [block, id], async (error, data) => {
        if (error) {
          throw error;
          // return res.json({status : "Error", " Error": 'Error while blocking'})
        }
        console.log('worked ' +data)
        db.query('SELECT * FROM users WHERE id = ?', [id], (err, bData) => {
          if (err) throw err;
          if (!bData.length) {
            return res.json({ status: "Error", " Error": 'ID Not registered, User does not exit' })
          }
          // bData = bData.[0].isBlocked
          if (bData[0].isBlocked === 1) {
            res.json({ status: "blocked", blocked: 'User blocked ' })
          } else {
            res.json({ status: "unblocked", unblocked: 'User unblocked ' })
          }
        })

      })
    } catch (error) {
      return res.json({ status: "Error", Error: 'Error while executing query' })
    }
  } 

}