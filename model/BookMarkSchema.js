const mongoose  = require("mongoose");
const BookMarkSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('bookmark',BookMarkSchema)

