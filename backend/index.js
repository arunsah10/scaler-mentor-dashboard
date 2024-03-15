const connectToMongo = require('./db');
const express = require("express");
connectToMongo();
var cors=require('cors');
const app = express();
const port = 5000;//default 3000 port is used but there we are going to run react app

//available routes_________________
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors(
      {
        origin: ["https://deploy-mern-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())

app.use('/api/auth',require('./routes/auth'));
app.use('/api/marks',require('./routes/marks'));

app.listen(port, () => {
  console.log(`Mentor Dashboardbook app listening on port http://localhost:${port}`);
});


