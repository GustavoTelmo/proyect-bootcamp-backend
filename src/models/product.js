const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    id:{
        type:Number,
        required: true
    },
    title:{
       type:String,
       required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }

});

module.exports = mongoose.model('product',productSchema);