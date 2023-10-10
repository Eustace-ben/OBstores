const db = require('../database/database');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

//GET ONE PRODUCT
exports.displayproduct = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM product WHERE user_id = ?', [id], (error, data) => {
    if (error) {
      return res.send({ status: "Error", Error: "Failed to fetch data" })
    }
    if (!data.length) {
      return res.send({ status: "Error", Error: "Error, invalid id" })
    }
    console.log(data)
    return res.send({ status: "success", data })
  })
}

//GET ALL PRODUCT
exports.displayAllproduct = (req, res) => {
  if(req.user){
    try {
      db.query('SELECT * FROM product', (error, data) => {
        if (error) {
          return res.send({ status: "Error", Error: "Failed to fetch data" })
        }
        if (!data.length) {
          return res.send({ status: "Error", Error: "error wrong query" })
        }
        return res.send({ status: "success", data })
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// CREATE A PRODUCT
exports.createproduct = async (req, res) => {
  if (req.user) {
    const { id } = req.user;
    const { product_id, name, brand, colors, product_desc, cartgory_no, image, price, sold } = req.body;
    if (!product_id || !name || !product_desc || !cartgory_no || !price || !image) {
      return res.send({ status: "Error", Error: "Please fill in Product details" })
    }
    try {
      db.query('INSERT INTO product SET user_id = ? , product_id = ?, name = ?, brand= ?, colors=?, product_desc=?, cartgory_no=?, image=?, price=?, sold=? ', [id, product_id, name, brand, colors, product_desc, cartgory_no, image, price, sold], (err, data) => {
        if (err) {
          return res.send({ status: "Error", Error: "Failed to while processing query" })
        } else {
          console.log(data)
          return res.send({ status: "Success" })
        }
      })

    } catch (error) {
      console.log(error)
    }
  }
}

//UPDATE PRODUCT
exports.updateproduct = async (req, res) => {
  const product_id = req.body.product_id;
  const name = req.body.name;
  const brand = req.body.brand;
  const colors = req.body.colors;
  const product_desc = req.body.product_desc;
  const cartgory_no = req.body.cartgory_no;
  const image = req.body.image;
  const price = req.body.price;
  const sold = req.body.sold;
  const { id } = req.params;
  db.query('UPDATE product SET product_id = ?, name = ?, brand= ?, colors=?, product_desc=?, cartgory_no=?, image=?, price=?, sold=? WHERE id = ? ', [product_id, name, brand, colors, product_desc, cartgory_no, image, price, sold, id], async (err, data) => {
    if (err) {
      throw err;
      // return res.json({status: 'Error', "Error": "Failed to Update your details"})
    } else {
      console.log(data)
      return res.json({ status: "success", data })
    }
  })
}


//DELETE PRODUCT
exports.deleteproduct = (req, res) => {
 if(req.user){
  const id = req.params;
  const pid = id.toString();
  try { 
    db.query('DELETE FROM product WHERE Product_id= ? ', [pid], (error, data1) => {
      if (error) {
        return res.json({ status: "Error", "Error": ' Failed to Delete Data' })
      } else {
        console.log(data1)
        return res.json({ status: "success" })
      }
    })
  } catch (error) {
    console.log(error)
  }
 }
}