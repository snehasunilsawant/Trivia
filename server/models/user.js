const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name: { type: String, required: true, minlength: 1 },
    score: { type: Number, default: 0},
    percentage: { type: Number, default: 0 },
}, { timestamps: true })


mongoose.model("User", UserSchema)