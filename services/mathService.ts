
/**
 * Processes a string and renders any LaTeX math found within $...$ (inline) 
 * or $$...$$ (block) delimiters using the globally available KaTeX library.
 */
export const processMathContent = (text: string): string => {
  if (typeof (window as any).katex === 'undefined') {
    return text;
  }

  let processed = text;

  // 1. Process Block Math ($$ ... $$)
  processed = processed.replace(/\$\$\s*([\s\S]+?)\s*\$\$/g, (match, latex) => {
    try {
      return `<div class="my-4 overflow-x-auto flex justify-center">` + 
             (window as any).katex.renderToString(latex, {
               throwOnError: false,
               displayMode: true
             }) + 
             `</div>`;
    } catch (error) {
      console.error('KaTeX Block error:', error);
      return match;
    }
  });

  // 2. Process Inline Math ($ ... $)
  processed = processed.replace(/\$([^$]+)\$/g, (match, latex) => {
    try {
      return (window as any).katex.renderToString(latex, {
        throwOnError: false,
        displayMode: false
      });
    } catch (error) {
      console.error('KaTeX Inline error:', error);
      return match;
    }
  });

  return processed;
};
