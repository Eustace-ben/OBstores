// const db = require('../database/database');

// //GET ALL PRODUCTS
// exports.displayproduct = (req, res)=>{
// console.log('is working')
// }


// // INSERT PRODUCT
// exports.createproduct = async(req, res)=>{
//     const product_id = req.body.product_id;
//     const name = req.body.name;
//     // const brand = req.body.brand;
//     // const colors = req.body.colors;
//     // const product_desc = req.body.product_desc;
//     // const cartgory_no = req.body.cartgory_no;
//     // const image = req.body.image;
//     // const price = req.body.price;
//     // const discount_id = req.body.discount_id;
//     // const sold = req.body.sold;

//     // if( !product_id || !name  || !product_desc || !cartgory_no || !price ){
//     //     res.send({status: "Error", Error : "Please fill in Product details"})
//     // }
//     try{
//         db.query('INSERT INTO product SET product_id = ?, name = ?', [ product_id, name], (err, data)=>{
//             if(!err){
//               console.log(data)
//               return res.send( { status: "Success"} )
            
//             }else{
//               return res.send( { status: "Error", Error : "Error occured while saving data!"} )
//             }
//           })

    
//     }catch(error){
//       console.log(error)
//     }
// }