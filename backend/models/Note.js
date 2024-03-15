const mongoose = require("mongoose");
const {Schema}=mongoose;
const NotesSchema = new Schema({
  // to associate a user with notes like foreign key in sql
  user:{
    type:mongoose.Schema.Types.ObjectId,
    // to reference schema user
    ref:'user'
  },
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    default: "general",
  },
  Phone_Number: {
    type: String,
    required: true,
  },
  Ideation :{
    type:Number,
  },
  Execution : {
    type:Number,
  },
  Presentation: {
    type:Number,
  },
  Communication: {
    type:Number,
  },
  Viva:{
    type:Number,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
