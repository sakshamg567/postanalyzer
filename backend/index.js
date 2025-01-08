const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");



const router = require("./routes/app.router")

dotenv.config();
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 3000

app.use("/api/analyze", router );

app.listen(PORT, () => console.log(`Server started on port : ${PORT}` ));
