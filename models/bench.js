//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create BenchSchema with weight, repetitions and created date.
const  BenchSchema = new Schema({
  weight: Number,
  repetitions: Number,
  created: { type: Date, default: Date.now },
});

const Bench = mongoose.model("Bench", BenchSchema);
//export Bench 
module.exports = Bench;