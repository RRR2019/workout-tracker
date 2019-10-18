const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  BenchSchema = new Schema({
  weight: Number,
  repetitions: Number,
  created: { type: Date, default: Date.now },
});

const Bench = mongoose.model("Bench", BenchSchema);

module.exports = Bench;