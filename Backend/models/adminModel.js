const { default: mongoose } = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default : "Admin"
  },
    email : {
      type : String,
      required : true,
      unique : true
    },
    password : {
      type : String,
      required : true,
    }
  },
  { timestamps: true },
);

const adminModel = new mongoose.model("admin", adminSchema);

module.exports = adminModel;
