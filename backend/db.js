const mongoose=require('mongoose');

const mongoURI='mongodb+srv://arunsah:2058@scaler.dt4jmc4.mongodb.net/?retryWrites=true&w=majority&appName=Scaler'

async function connectToMongo() {
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }

module.exports=connectToMongo;