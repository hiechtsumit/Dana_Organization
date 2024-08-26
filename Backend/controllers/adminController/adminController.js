// const donateModel = require("../../models/donateModel");
const helpModel = require("../../models/helpModel");
const adminModel = require("../../models/adminModel");
const accountbalanceModel = require("../../models/accountbalanceModel");

module.exports.admin = async (req, res) => {
  try {
    const admin = await adminModel.findById(req.id);
    const accountBalance = await accountbalanceModel.findOne();
    return res.send({
      status: 200,
      message: "Admins fetched successfully",
      admin,
      accountBalance
    });
  } catch (err) {
    return res.send({
      status: 500,
      message: "Internal server error",
    });
  }
};


// show all help message
module.exports.show_all_help = async (req, res) => {
  try {
    let helpMessage = await helpModel.find().sort({ createdAt: -1 });
    return res.render("help-message", {
      helpMessage,
    });
  } catch (err) {
    return res.send({
      message: "Server Down",
    });
  }
};
