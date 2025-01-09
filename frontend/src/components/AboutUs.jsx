// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react"

const token = import.meta.env.VITE_GITHUB_TOKEN;

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
            const response = await fetch(`https://api.github.com/users/${username}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
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
    <div id="About-us" className="flex flex-col items-center text-center scale-75 md:scale-90 lg:scale-100">
      <h1 className="font-bold text-3xl mb-2">About Us</h1>
      <p className="mb-12 text-lg">We are a team of Passionate Developers, Making products that eases the life of others</p>
      <div id="profile-container" className="flex flex-row max-h-96 gap-5  ">
        {profiles.map((profile) => (
          <div 
            key={profile.id}
            id="profile-card"
            className="border-white border-2 rounded-xl p-7 border-solid max-w-72 bg-slate-400 backdrop-blur-xl bg-opacity-15 text-clip h-80"  
          >
              <a 
                href={profile.html_url} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center text-center"  
              >
                <img 
                  src={profile.avatar_url}
                  alt={profile.login} 
                  className="rounded-full max-w-20 mb-1"  
                />
                <span className="mb-5 font-semibold">
                  {profile.name || profile.login}
                </span>
                <p className="text-sm overflow-hidden text-ellipsis max-h-24">{profile.bio || "No bio available"}</p>
              </a>
          </div>
        ))}
      </div>  
    </div>
  );
}

export default AboutUs;