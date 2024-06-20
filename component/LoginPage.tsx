"use client";

const clientId = "783153f9b5e64475ad8f1592a38b4d06";
const redirectUri = "http://localhost:3000/callback";
const scopes = "user-read-private user-read-email";

function LoginPage() {
  const handleLogin = () => {
    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`;
    window.location.href = spotifyAuthUrl;
  };

  return (
    <>
      <h1>Spotify Auth Login</h1>
      <button onClick={handleLogin}>Login with Spotify</button>
    </>
  );
}

export default LoginPage;
