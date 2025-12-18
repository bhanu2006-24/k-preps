const API_URL = 'https://api.quotable.io/random?tags=inspirational,wisdom';

export const fetchQuote = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) return null;
    const data = await res.json();
    return `"${data.content}" — ${data.author}`;
  } catch (error) {
    console.error("Quote API Error:", error);
    // Fallback if API fails (common with free tier limits)
    return "Believe you can and you're halfway there. — Theodore Roosevelt";
  }
};