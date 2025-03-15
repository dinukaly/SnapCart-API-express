const mongoose  = require("mongoose");
const VoucherDetailSchema = new mongoose.Schema({
    voucher: {
        type:Object,
        required:true,
        
    },
    user:{
        type:Object,
    },
    recipient:{
        type:String,
        required:true
    },
    cost:{
        type:Object,
        required:true
    },
    qr:{
        type:Object,
        required:true
    },
});

module.exports = mongoose.model('voucherDetail',VoucherDetailSchema)