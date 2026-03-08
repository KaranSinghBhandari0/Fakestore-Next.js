export const getAllUsers = async () => {
  const MAX_RETRIES = 3;
  let lastError;

  for (let i = 0; i < MAX_RETRIES; i++) {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        next: { revalidate: 600 }, // Cache for 10 minutes
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.9',
          'Referer': 'https://fakestoreapi.com/',
          'Connection': 'keep-alive'
        }
      });
      
      if (response.ok) {
        return await response.json();
      }
      
      if (response.status === 403) {
        // Rate limit - wait before retry
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        lastError = new Error(`API rate limited: ${response.status}`);
        continue;
      }
      
      throw new Error(`API error: ${response.status}`);
    } catch (error) {
      lastError = error;
      if (i < MAX_RETRIES - 1) {
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, 500 * (i + 1)));
      }
    }
  }

  console.error("Error fetching users after retries:", lastError);
  throw new Error("Failed to load users. Please try again later.");
}