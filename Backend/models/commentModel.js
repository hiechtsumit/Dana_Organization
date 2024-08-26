const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
    program :{
        type : mongoose.Types.ObjectId,
        ref : 'program'
    },
    name: {
        type: String,
        require : true
    },
    email: {
        type: String,
        require : true
    },
    phone: {
        type: String,
        require : true
    },
    comment: {
        type: String,
        require : true
    },
    reply: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: "pending",
    },
},{timestamps : true});

const commentModel = new mongoose.Model("comment", schema);
module.exports = commentModel;
