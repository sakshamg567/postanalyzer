// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react"


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

  return(
    <div id="About-us">
      <h1>About Us</h1>
      <p>We are a team of Passionate Developers, Making products that eases the life of others</p>
      <div id="profile-container" className="flex flex-row max-h-80 ">
        {profiles.map((profile) => (
          <div key={profile.id} id="profile-card">
              <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                <img src={profile.avatar_url} alt={profile.login} />
                <span>{profile.name || profile.login}</span>
                <p>{profile.bio || "No bio available"}</p>
              </a>
          </div>
        ))}
      </div>  
    </div>
  );
}

export default AboutUs;