const mongoose  = require("mongoose");
const ReturnSchema = new mongoose.Schema({
    order: {
        type:Object, 
        required:true,
        
    },
    reason:{
        type:String,
        required:true
    },
    status:{
        type:String, // {pending, processing, shipped, delivered, cancelled}
        required:true
    },
    returnProcess:{ //process
        type:Array, // {id,email,name}
    },
    requestedDate:{
        type:Date,
        required:true
    },
    completedData:{
        type:String, // refund, new product
    },
});

module.exports = mongoose.model("Return", ReturnSchema);