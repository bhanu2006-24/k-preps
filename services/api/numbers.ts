const API_URL = 'http://numbersapi.com/random/math';

export const fetchMathFact = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) return null;
    const text = await res.text();
    return text;
  } catch (error) {
    console.error("Numbers API Error:", error);
    return "The number 0 is the additive identity.";
  }
};