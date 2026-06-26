const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({path: "./config.env"})
const app = require('./app');
const { create } = require("node:domain");

const DB = process.env.DATABASE

mongoose.connect(DB).then(() => console.log("DB connection succsessful"))


// const testCard = new Card({
//     name: "Code schreiben",
//     desc: "Code von server.js muss geschrieben werden",
//     idList: "66f5a1b2c8e4d5f6a7b8c9e0"
// })



// testCard.save().then(doc => {
//     console.log(doc)
// }).catch(err =>{
//     console.log("ERRRROOORRRRR")
// })

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running in port ${port}`);
});

