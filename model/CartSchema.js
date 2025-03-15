const mongoose  = require("mongoose");
const CartSchema = new mongoose.Schema({
    user: {
        type:Object,
        required:true,
        
    },
    product:{
        type:Object, //productName, productid
        required:true
    },
    date:{
        type:Date,
    }, 
    qty:{
        type:Number,
        required:true
    },
});

module.exports = mongoose.model('cart',CartSchema)