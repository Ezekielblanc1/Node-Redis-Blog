const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model('blog', blogSchema)
