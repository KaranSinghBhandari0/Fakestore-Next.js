export const getAllUsers = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users", {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to load users. Please try again later.");
  }
}