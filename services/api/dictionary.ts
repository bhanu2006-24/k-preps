const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const fetchDefinition = async (term: string) => {
  try {
    const res = await fetch(`${API_URL}${term}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data[0]?.meanings[0]?.definitions[0]?.definition || null;
  } catch (error) {
    console.error("Dictionary API Error:", error);
    return null;
  }
};