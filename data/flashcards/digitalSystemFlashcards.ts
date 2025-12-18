
import { Flashcard } from '../../types';

export const digitalSystemFlashcards: Flashcard[] = [
  {
    id: 'fc-dsd-1',
    subjectId: 'digital-system-design',
    question: 'De Morgan\'s First Law?',
    answer: '(A + B)\' = A\' . B\'',
    difficulty: 'Easy'
  },
  {
    id: 'fc-dsd-2',
    subjectId: 'digital-system-design',
    question: 'Universal Gates?',
    answer: 'NAND and NOR',
    difficulty: 'Easy'
  },
  {
    id: 'fc-dsd-3',
    subjectId: 'digital-system-design',
    question: 'Race Around Condition?',
    answer: 'Occurs in JK flip-flop when J=1, K=1 and clock pulse width is widely larger than propagation delay.',
    difficulty: 'Medium'
  },
  {
    id: 'fc-dsd-4',
    subjectId: 'digital-system-design',
    question: 'Modulus of a Counter?',
    answer: 'The number of unique states a counter passes through.',
    difficulty: 'Medium'
  },
  {
    id: 'fc-dsd-5',
    subjectId: 'digital-system-design',
    question: 'Setup Time?',
    answer: 'Minimum time input must be stable BEFORE the clock edge.',
    difficulty: 'Hard'
  }
];
