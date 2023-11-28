const connectToMongo = require('./db');
const express = require("express");
connectToMongo();
const app = express();
const port = 5000;//default 3000 port is used but there we are going to run react app

//available routes_________________
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json())

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`iNotebook app listening on port http://localhost:${port}`);
});


