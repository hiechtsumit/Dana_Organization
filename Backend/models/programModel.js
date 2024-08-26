const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema(
  {
    heading: {
      type: String,
    },
    subHeading: {
      type: String,
    },
    targetAmount:{
      type: Number,
    },
    toExpencesAmount:{
      type: Number,
      default : 0
    },
    description: {
      type: String,
    },
    poster: {
      type: String,
    },
    programDate: {
      type: String,
    },
    image: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
    },
    experience: {
      type: String,
    },
    location: {
      type: String,
    },
    category: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const programModel = new mongoose.model("program", schema);

module.exports = programModel;
