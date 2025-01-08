import React, { useRef } from "react";
import "./App.css"; // Optional for styling
import Analysis from "./components/Analysis"; // Import the Analysis component
import AboutUs from "./components/AboutUs";

function App() {
  const homeRef = useRef(null);
  const analysisRef = useRef(null);
  const aboutUsRef = useRef(null);
  const techRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection(homeRef)}>Home</button></li>
          <li><button onClick={() => scrollToSection(analysisRef)}>Analysis</button></li>
          <li><button onClick={() => scrollToSection(aboutUsRef)}>About Us</button></li>
        </ul>
      </nav>

      {/* Sections */}
      <div className="content">
        <section ref={homeRef} className="home-section">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
            <div>
              <h1>Social Media Analyzer</h1>
              <p>
                "Gain powerful insights into your social media presence with our analyzer.<br/>
                Discover trends, enhance engagement, and elevate your digital strategy effortlessly."
              </p>
              <button onClick={() => scrollToSection(analysisRef)} className="analyze-button">
                Analyze Now
              </button>
            </div>
            <img src="src/image.png" alt="Social Media Analysis" style={{ maxWidth: '300px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)' }} />
          </div>
          <div className="video-container">
            <h2>Learn more through this video: </h2>
            <video controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section ref={analysisRef} className="analysis-section">
          {/* Include Analysis Component here */}
          <Analysis />
        </section>

        <section ref={aboutUsRef}>
          <AboutUs />
        </section>

      </div>
    </div>
  );
}

export default App;
