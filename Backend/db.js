const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aryadg:Rexus%402005@todocluster.j6jjl.mongodb.net/");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
  todo
}

