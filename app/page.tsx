"use client"
import { useState } from "react";
import { login, searchTracks, playTrack ,pause} from "../services/SpotifyService";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [trackUri, setTrackUri] = useState("");

  const handleLogin = () => {
    login();
  };

  const handleSearch = async () => {
    try {
      const uri = await searchTracks(searchQuery);
      setTrackUri(uri);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlay = async () => {
    try {
      await playTrack(trackUri);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePause = async () => {
    pause()
  }

  return (
    <div className="App">
      <button onClick={handleLogin}>Login with Spotify</button>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a track"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {trackUri && (
        <div>
          <p>Track URI: {trackUri}</p>
          <button onClick={handlePlay}>Play</button>
        </div>
      )}

      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
