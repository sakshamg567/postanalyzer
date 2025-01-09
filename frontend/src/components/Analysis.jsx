import React, { useState, useEffect } from "react";
import "./Analysis.css";

function Analysis() {
  const [placeholder, setPlaceholder] = useState("Reels");
  const [inputValue, setInputValue] = useState(""); // State to store input value
  const [insightData, setInsightData] = useState(""); // State to store the backend data
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const placeholders = ["Reels...", "Posts...", "Lives..."];
    let index = 0;

    const interval = setInterval(() => {
      setPlaceholder(placeholders[index]);
      index = (index + 1) % placeholders.length;
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle form submission to send data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setLoading(true);
      try {
        // Replace 'your-backend-url' with the actual backend URL
        const response = await fetch("your-backend-url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: inputValue }),
        });

        const data = await response.json();
        setInsightData(data.insights); // Assuming response has `insights` field
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="analysis">
      <h1>Analysis</h1>

      {/* Input bar with animated placeholder */}
      <div>
        <h2>Get Insights on your Socials 📈</h2>
        <label htmlFor="insights-input">Enter what you want insights on:</label>
        <input
          id="insights-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={`Eg. ${placeholder}`}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* Render Insights if data is fetched */}
      {loading ? (
        <p>Loading...</p>
      ) : insightData ? (
        <div className="insights-container">
          <h1>Insights</h1>
          <p>{insightData}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Analysis;
