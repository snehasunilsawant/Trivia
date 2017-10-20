const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const QuestionSchema = mongoose.Schema({
    qtext: { type: String, required: true, minlength: 15 },
    correctAns: { type: String, required: true },
    fakeAns1: { type: String, required: true },
    fakeAns2: { type: String, required: true },
    }, { timestamps: true })


mongoose.model("Question", QuestionSchema)