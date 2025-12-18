const API_URL = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

export const fetchWikiSummary = async (term: string) => {
  try {
    const res = await fetch(`${API_URL}${encodeURIComponent(term)}`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.type === 'disambiguation') return null;
    return {
      extract: data.extract,
      url: data.content_urls?.desktop?.page
    };
  } catch (error) {
    console.error("Wikipedia API Error:", error);
    return null;
  }
};