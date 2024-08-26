const { default: mongoose } = require("mongoose");

const donateSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    amount : {
        type : String,
        required : true
    },
    status : {
        type : String,
        default : ""
    },
    receiver:{
        type : String,
    }
},{timestamps : true})

const donateModel = new mongoose.model('donater',donateSchema);

module.exports = donateModel;