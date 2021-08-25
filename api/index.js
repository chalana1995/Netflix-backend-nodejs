const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv')
const authRoute = require("./routes/auth");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connect Successfully")
})
    .catch((error) => {
        console.log(error)
    })

app.use(express.json());

app.use("/api/auth", authRoute);


app.listen(8800, () => {
    console.log("Backend Server Running");
})