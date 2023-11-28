const mongoose = require("mongoose");
const {Schema}=mongoose;
const NotesSchema = new Schema({
  // to associate a user with notes like foreign key in sql
  user:{
    type:mongoose.Schema.Types.ObjectId,
    // to reference schema user
    ref:'user'
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "general",
  },
  tag: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
