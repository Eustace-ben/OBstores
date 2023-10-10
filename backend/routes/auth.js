const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {isLoggedIn} = require('../middleware/authMiddleware');
const { isAdmin} = require('../middleware/authMiddleware');
// const {isBlocked } = require('../middleware/authMiddleware')
const productController = require('../controllers/productController');
const adminController = require('../controllers/adminController');




//AUTH ROUTES USER
router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/fetchUsers', userController.displayUsers)
router.get('/myaccount', isLoggedIn, userController.displayUserProfile)
router.delete('/delete/:id', userController.deleteUser)
router.put('/update/:id', userController.updateUser)
router.post('/logout',isLoggedIn, userController.logout);



//ADMIN ROUTES FOR USERS
router.post('/admin/access', isLoggedIn, isAdmin, adminController.login);
router.get('/admin/adminprofile', isLoggedIn, isAdmin, adminController.displayadminprofile);
router.get('/admin/proute', isLoggedIn, isAdmin, adminController.proute);
router.get('/admin/allusers', isLoggedIn, isAdmin, adminController.allusers);
router.get('/admin/recentusers', isLoggedIn, isAdmin, adminController.recentusers);
router.put('/admin/editusers/:id', isLoggedIn, isAdmin, adminController.editusers);
router.delete('/admin/deleteuser/:id', isLoggedIn, isAdmin, adminController.deleteuser);
router.put('/admin/changerole/:id', isLoggedIn, isAdmin, adminController.changerole);
router.put('/admin/block/:id',isLoggedIn, isAdmin, adminController.blockandunblock);

//  ROUTES FOR PRODUCT
router.get('/displayproduct/:id', productController.displayproduct);
router.get('/admin/displayAllproduct', isLoggedIn, isAdmin,  productController.displayAllproduct);
router.post('/admin/createproduct', isLoggedIn, isAdmin, productController.createproduct);
router.put('/updateproduct/:id', isLoggedIn, productController.updateproduct);
router.delete('/admin/deleteproduct/:id', isLoggedIn,isAdmin,  productController.deleteproduct);







module.exports = router;