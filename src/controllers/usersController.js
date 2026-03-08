export const getAllUsers = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users", {
      next: { revalidate: 600 } // Cache for 10 minutes
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