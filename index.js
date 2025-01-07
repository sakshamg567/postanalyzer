const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const BASE_API_URL = "https://api.langflow.astra.datastax.com";
const LANGFLOW_ID = "9a4d7fc7-dd5f-4005-bd21-8b1edd2f4018";
const FLOW_ID = "4a3fcfed-77fd-4256-b40f-cdb3ef47022d";
const APPLICATION_TOKEN = "AstraCS:gbCzhJEOzKumMnEDHRRrPDYv:8c33962ee4efbf47ea596496d516d0330578bf3895f424b44d7f585caee82a9e";

app.post("/analyze", async (req, res) => {
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
    return res.status(200).json(api_response.data); // Send Langflow response
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => console.log("Server started on port 3000"));
