const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const app = express();

const userRouter = require("./routes/user");
app.use(cors());
const User = require("./models/user");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRouter);

sequelize
  .sync()
  .then(() => {
    console.log("Database Connected Succesfully");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });