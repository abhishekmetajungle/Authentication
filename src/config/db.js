require("dotenv").config();
const mongoose = require("mongoose");

const {MONGODB_URI} = process.env

const connectionToDB =  async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            userNewUrlParser: true,
            userUnifiedTopology: true,
        });
        console.log("DB Connected");

    } catch (error) {
        console.log(error);

        
    }
}
connectionToDB();
