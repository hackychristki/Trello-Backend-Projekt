const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({path: "./config.env"})
const app = require('./app');

const DB = process.env.DATABASE

mongoose.connect(DB).then(() => console.log("DB connection succsessful"))

console.log(process.env)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running in port ${port}`);
});
