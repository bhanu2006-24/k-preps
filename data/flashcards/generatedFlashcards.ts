
import { Flashcard } from '../../types';

const subjs = ['advance-mathematics', 'signal-system', 'computer-programming', 'technical-communication', 'network-theory', 'electronic-devices', 'digital-electronics', 'control-systems'];

export const generatedFlashcards: Flashcard[] = subjs.flatMap(sub => 
    Array.from({ length: 55 }, (_, i) => ({
        id: `fc-gen-${sub}-${i}`,
        subjectId: sub,
        question: `Core Concept #${i+1} for ${sub.replace('-', ' ')}`,
        answer: `This is a key definition or formula relevant to concept #${i+1}. Memorize this for your exams!`,
        difficulty: (i % 3 === 0 ? 'Easy' : i % 3 === 1 ? 'Medium' : 'Hard') as 'Easy' | 'Medium' | 'Hard'
    }))
);
