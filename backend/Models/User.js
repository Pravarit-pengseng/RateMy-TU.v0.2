const { required } = require("joi")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    plainPassword: {
        type: String, // test
    },
})

const UserModel = mongoose.model("Users", UserSchema)
module.exports = UserModel