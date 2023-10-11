const productSchema = require('../models/product');
const contactSchema = require('../models/contact');



const showProduct= (req,res)=>{
    productSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error}));
};

const createProduct = (req,res) =>{
    const product = productSchema(req.body);
    product.save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error}));
};

const findById= (req,res)=>{
    const {id} = req.params;
    productSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error}));
};

const updateProduct = (req,res)=>{
    const {id} = req.params;
    const {title,price,description,image} = req.body;
    productSchema
        .updateOne({id:id},{$set:{title,price,description,image}})
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error}));
};

const deleteProduct = (req, res) =>{
    const {id} = req.params;
    productSchema
      .deleteOne({id:id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

const createContact = (req,res) =>{
    const contact = contactSchema(req.body);
    contact.save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error}));
};

const showContact= (req,res)=>{
    contactSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message:error}));
};

const deleteContact = (req, res) =>{
    const {_id} = req.params;
    contactSchema
      .deleteOne({_id:_id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };


module.exports = {showProduct,
                  createProduct,
                  findById,
                  updateProduct,
                  deleteProduct,
                  createContact,
                  showContact,
                  deleteContact};