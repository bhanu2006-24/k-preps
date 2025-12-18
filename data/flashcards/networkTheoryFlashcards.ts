
import { Flashcard } from '../../types';

export const networkTheoryFlashcards: Flashcard[] = [
  {
    id: 'fc-nt-1',
    subjectId: 'network-theory',
    question: 'Thevenin\'s Theorem?',
    answer: 'Any linear circuit can be replaced by Vth in series with Rth.',
    difficulty: 'Easy'
  },
  {
    id: 'fc-nt-2',
    subjectId: 'network-theory',
    question: 'Norton\'s Theorem?',
    answer: 'Equivalent circuit with Current Source (In) in parallel with Rn.',
    difficulty: 'Easy'
  },
  {
    id: 'fc-nt-3',
    subjectId: 'network-theory',
    question: 'Maximum Power Transfer Condition (DC)?',
    answer: 'Load resistance RL = Source resistance Rth.',
    difficulty: 'Medium'
  },
  {
    id: 'fc-nt-4',
    subjectId: 'network-theory',
    question: 'Quality Factor (Q) Series RLC?',
    answer: '(1/R) * √(L/C)',
    difficulty: 'Medium'
  },
  {
    id: 'fc-nt-5',
    subjectId: 'network-theory',
    question: 'Reciprocity Theorem?',
    answer: 'Ratio of response to excitation remains invariant if positions of source and response are interchanged. Applies to linear, bilateral networks.',
    difficulty: 'Hard'
  }
];
