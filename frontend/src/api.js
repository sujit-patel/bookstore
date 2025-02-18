const API_URL = import.meta.env.SERVER_URL;

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) throw new Error("API error");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
