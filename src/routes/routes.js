const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controllers');
const productSchema = require('../models/product');
const contactSchema= require('../models/contact');


router.get("/cards", Controller.showProduct);

router.post("/cards", Controller.createProduct);

router.get("/cards/:id", Controller.findById);

router.put("/cards/:id", Controller.updateProduct);

router.delete("/cards/:id", Controller.deleteProduct);

router.post("/contact", Controller.createContact);

router.get("/contact", Controller.showContact);

router.delete("/contact/:_id", Controller.deleteContact);


module.exports = router;
