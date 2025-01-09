import React, { useState, useEffect } from "react";
import "./AboutUs.css";

function AboutUs() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // GitHub usernames of the people you want to display
    const githubUsers = [
      "sakshamg567",
      "zxsharp",
      "KAMAL-GOND"
    ];
    
    const fetchProfiles = async () => {
      try {
        const profileData = await Promise.all(
          githubUsers.map(async (username) => {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            return data;
          })
        );
        setProfiles(profileData);
      } catch (error) {
        console.error("Error fetching GitHub profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>We are a team of enthusiastic developers making the world better.</p>

      <div className="cards-container" style={{ display: "flex", justifyContent: "space-around" }}>
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="profile-card"
            style={{
              width: "200px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "1rem",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <a href={profile.html_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={profile.avatar_url}
                alt={profile.login}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "1rem",
                }}
              />
              <h3>{profile.name || profile.login}</h3>
              <p>{profile.bio || "No bio available"}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
