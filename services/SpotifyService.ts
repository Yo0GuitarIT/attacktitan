const API_BASE_URL = "http://localhost:4000";

export const login = () => {
  window.location.href = `${API_BASE_URL}/login`;
};

export const searchTracks = async (query: any) => {
  const response = await fetch(`${API_BASE_URL}/search?q=${query}`);
  if (!response.ok) {
    throw new Error("Search failed");
  }
  const data = await response.json();
  return data.uri;
};

export const playTrack = async (uri: any) => {
  const response = await fetch(`${API_BASE_URL}/play?uri=${uri}`);
  if (!response.ok) {
    throw new Error("Play failed");
  }
};

export const pause = async () => {
    const response = await fetch(`${API_BASE_URL}/pause`);
    if (!response.ok) {
        throw new Error("Plause failed");
      } 
}
