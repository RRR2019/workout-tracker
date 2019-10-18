const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RunSchema = new Schema({
  time: String,
  distance: Number,
  created: { type: Date, default: Date.now },
});

const Run = mongoose.model("Run", RunSchema);

module.exports = Run;