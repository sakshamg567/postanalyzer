import React from "react";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Application</h1>
      <p>This is the best platform to explore tech and analysis.</p>
      
      {/* Link to download the PPT */}
      <a href="/path-to-your-ppt-file.pptx" download>
        Download PPT
      </a>
      
      <div className="video-section" style={{ marginTop: "20px" }}>
        <h2>Learn More About Our Project</h2>
        
        {/* Embedded Video */}
        <video width="600" controls>
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Alternatively, link to the video */}
        {/* <a href="/path-to-your-video.mp4" target="_blank" rel="noopener noreferrer">
          Watch Project Video
        </a> */}
      </div>
    </div>
  );
}

export default Home;
