const express = require("express");
require("dotenv").config();
require("./config/mongoose").connectFun();
const cors = require("cors");
const app = express();

const port = process.env.port || 4000;

// cors platform setting
app.use(
  cors({
    origin: [process.env.origin, process.env.admin],
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));


// Create server
app.listen(port, (err) => {
  try {
    console.log(`Server is running on port ${port}`);
  } catch (err) {
    console.log(err);
    return;
  }
});
