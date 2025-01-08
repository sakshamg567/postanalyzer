const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const path = require("path");


const router = require("./routes/app.router")

dotenv.config();
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.static(path.join(__dirname, 'dist')))
const PORT = process.env.PORT || 3000

app.use("/api/analyze", router );
app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => console.log(`Server started on port : ${PORT}` ));
