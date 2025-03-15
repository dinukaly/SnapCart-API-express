const mongoose  = require("mongoose");
const RefundSchema = new mongoose.Schema({
    order: {
        type:Object, 
        required:true,
        
    },
    returnData:{
        type:Object,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    status:{
        type:String, // {pending, processing, shipped, delivered, cancelled}
        required:true
    },
    refundProcess:{ //process
        type:Array, // {id,email,name}
    },
    requestedDate:{
        type:Date,
        required:true
    },
    refundedAmount:{
        type:Number,
    },
});

module.exports = mongoose.model("Refund", RefundSchema);