const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const { MONGODB_URL } = process.env;

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("Database connect"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
