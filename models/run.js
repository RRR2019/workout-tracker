//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create RunSchema with weight, repetitions and created date
const RunSchema = new Schema({
  time: String,
  distance: Number,
  created: { type: Date, default: Date.now },
});

const Run = mongoose.model("Run", RunSchema);
//export Run 
module.exports = Run;