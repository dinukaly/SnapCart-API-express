const mongoose  = require("mongoose");
const OrderSchema = new mongoose.Schema({
    products: {
        type:Array, //[productDate, discount, qty]
        required:true,
        
    },
    total:{
        type:Number,
    },
    status:{
        type:String, // {pending, processing, shipped, delivered, cancelled}
        required:true
    },
    customer:{
        type:Object, // {id,email,name}
        required:true
    },
    trackingData:{
        type:Array,
        required:true
    },
    placedDate:{
        type:Date,
        required:true
    },
    shippeddDate:{
        type:Date,
        required:true
    },
});

module.exports = mongoose.model("Order", OrderSchema);