const donateModel = require("../../models/donateModel");
const adminModel = require("../../models/adminModel");
const accountModel = require("../../models/accountbalanceModel");

module.exports.show_all_payments = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 20) || 20; // Default limit to 20
    const skip = parseInt(req.query.skip, 20) || 0; // Default skip to 0
    //   const admin_details = await adminModel.findOne();
    const donaters = await donateModel
      .find({
        //   $and: [{ "donate_date": { $gte: admin_details.start_date
        //   }, "donate_date": { $lte: admin_details.end_date
        //   } }]
        // status: "Received",
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    return res.send({
      status: 200,
      message: "All payments are shown successfully",
      donaters,
      // totalAmount: admin_details.amount,
    });
  } catch (err) {
    res.send({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

// payment received
module.exports.payment_received = async (req, res) => {
  try {
    const donater = await donateModel.findByIdAndUpdate(
      { _id: req.body.id },
      {
        status: "Received",
        receiver: req.body.receiver_name,
      }
    );
    const updateDonater = await donateModel.findById(donater._id);

    // Add confirm payment received
    const account_details = await accountModel.findOne();

    const ADD_AMOUNT =
      account_details.colectedAmount + parseFloat(donater.amount);

    await accountModel.findByIdAndUpdate(account_details._id, {
      colectedAmount: ADD_AMOUNT,
    });

    return res.send({
      status: 200,
      message: "Payment Received Successfully",
      donater: updateDonater,
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

// payment not received
module.exports.payment_not_received = async (req, res) => {
  // console.log("payment not Received");
  try {
    const donater = await donateModel.findByIdAndUpdate(
      { _id: req.body.id },
      {
        status: "Not-Received",
        receiver: req.body.receiver_name,
      }
    );
    const updateDonater = await donateModel.findById(donater._id);
    // console.log(donater);
    return res.send({
      status: 200,
      message: "Payment Not Received Successfully",
      donater: updateDonater,
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

// delete any payment
module.exports.payment_delete = async (req, res) => {
  // console.log("world")
  try {
    const isPresent = await donateModel.findById({ _id: req.body.id });
    if (isPresent) {
      await donateModel.findByIdAndDelete({ _id: req.body.id });
      return res.send({
        status: true,
      });
    }
    return res.send({
      status: false,
    });
  } catch (err) {
    res.send({
      status: 404,
      message: "Server Down",
    });
  }
};
