
import { subjects, resources, flashcards } from '../data/index';
import { tryConvertUnits } from './unitConverter';

export const getSmartResponse = async (query: string): Promise<{text: string, sources?: any[]}> => {
  const lowerQuery = query.toLowerCase();

  // 1. Unit Conversion (Instant)
  const conversionResult = tryConvertUnits(lowerQuery);
  if (conversionResult) {
    return { text: `⚡ **Instant Conversion:**\n${conversionResult}` };
  }

  // 2. Intelligent Search in Local Knowledge Base
  const keywords = lowerQuery.split(' ').filter(w => w.length > 3);
  
  // Try finding a matching flashcard first (Quick definitions)
  const matchedCard = flashcards.find(fc => 
    fc.question.toLowerCase().includes(lowerQuery) || 
    lowerQuery.includes(fc.question.toLowerCase().replace('what is', '').trim())
  );

  if (matchedCard) {
    return { 
      text: `💡 **Quick Answer:**\n\n**Q:** ${matchedCard.question}\n**A:** ${matchedCard.answer}\n\n*Level: ${matchedCard.difficulty}*` 
    };
  }

  // Deep search in Markdown notes
  for (const res of resources) {
    if (res.markdownContent) {
      const contentLower = res.markdownContent.toLowerCase();
      if (contentLower.includes(lowerQuery) || (keywords.length > 0 && keywords.every(k => contentLower.includes(k)))) {
        // Find a relevant snippet
        const index = contentLower.indexOf(lowerQuery);
        const start = Math.max(0, index - 50);
        const snippet = res.markdownContent.substring(start, start + 400);
        
        return { 
          text: `📝 **Found in your Library (${res.title}):**\n\n...${snippet}...\n\n[Open this note in Library]` 
        };
      }
    }
  }

  // Syllabus info
  for (const sub of subjects) {
    if (lowerQuery.includes(sub.name.toLowerCase()) || lowerQuery.includes(sub.code.toLowerCase())) {
      return { 
        text: `🎓 **${sub.name} (${sub.code})**\n\n${sub.description}\n\n**Modules:**\n${sub.objectives.map(o => `• ${o.id}: ${o.description}`).join('\n')}` 
      };
    }
  }

  // Default Offline Response
  if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
    return { text: "👋 Hello! I'm your offline study assistant. Ask me for definitions (e.g., 'What is KCL?'), convert units, or ask about your syllabus." };
  }

  return { 
    text: "🔍 **Local Search Result:**\nI couldn't find a specific match in your local notes for that. Try searching for broader terms like 'transistor', 'MOSFET', or 'KCL'." 
  };
};
