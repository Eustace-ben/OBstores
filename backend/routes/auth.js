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
router.get('/show', isLoggedIn,isAdmin, userController.homestart);
router.put('/block',isLoggedIn,isAdmin, userController.blockandunblock);
router.get('/logout',isLoggedIn, userController.logout);



//ADMIN ROUTER
router.post('/admin/access', isLoggedIn, isAdmin, adminController.login);
router.get('/admin/adminprofile', isLoggedIn, isAdmin, adminController.displayadminprofile)
router.get('/admin/proute', isLoggedIn, isAdmin, adminController.proute)




//AUTH ROUTES PRODUCT
router.get('/displayproduct/:id', productController.displayproduct);
router.get('/displayAllproduct', productController.displayAllproduct);
router.post('/createproduct/:id', isLoggedIn, productController.createproduct);
router.put('/updateproduct/:id', isLoggedIn, productController.updateproduct);
router.delete('/deleteproduct/:id', isLoggedIn, productController.deleteproduct);







module.exports = router;