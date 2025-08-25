const mongoose = require("mongoose")

const mongo_rul = process.env.MONGO_CON

mongoose.connect(mongo_rul)
.then(() => {
    console.log("MongoDB Connect")
}).catch((err) =>
    console.log("MongoDB Connect Error", err))