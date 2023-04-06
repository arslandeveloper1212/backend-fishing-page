const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Cuser:{
        type: String,
        required: true,
    },
    Xs:{
        type: String,
        required: true,
    }
})

const User = new mongoose.model("data", UserSchema);

module.exports= User;