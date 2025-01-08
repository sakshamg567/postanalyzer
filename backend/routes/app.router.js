const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

const router = express.Router();

const { BASE_API_URL, LANGFLOW_ID, FLOW_ID, APPLICATION_TOKEN } = process?.env;

router.post(`/`, async (req,res) => {
   try {
      if (!req.body || !req.body.text) {
        return res
          .status(400)
          .json({ error: "Text is required in the request body" });
      }
  
      const text = req.body.text;
  
      const api_url = `${BASE_API_URL}/lf/${LANGFLOW_ID}/api/v1/run/${FLOW_ID}`;
      const payload = {
        input_value: text,
        output_type: "chat",
        input_type: "chat",
      };
  
      const headers = {
        Authorization: `Bearer ${APPLICATION_TOKEN}`,
        "Content-Type": "application/json",
      };
  
      const api_response = await axios.post(api_url, payload, { headers });
  
      res.setHeader("Access-Control-Allow-Origin", "*"); // CORS header
      return res.status(200).json({analysis: api_response.data["outputs"][0]["outputs"][0]["artifacts"]["message"]}); // Send Langflow response
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router