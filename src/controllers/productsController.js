export const getAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 600 }, // Cache for 10 minutes
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to load products. Please try again later.");
  }
}