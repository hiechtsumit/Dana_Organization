const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema(
  {
    colectedAmount: {
      type: Number,
    },
    toSpendAmount:{
      type: Number,
    }
  },
  { timestamps: true },
);

const accountbalanceModel = new mongoose.model("accountbalance", schema);

module.exports = accountbalanceModel;