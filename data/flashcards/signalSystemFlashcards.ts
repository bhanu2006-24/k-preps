
import { Flashcard } from '../../types';

export const signalSystemFlashcards: Flashcard[] = [
  {
    id: 'fc-ss-1',
    subjectId: 'signal-system',
    question: 'Energy Signal Energy (E)?',
    answer: '0 < E < ∞, Power P = 0',
    difficulty: 'Easy'
  },
  {
    id: 'fc-ss-2',
    subjectId: 'signal-system',
    question: 'Fourier Transform of Rectangle Pulse?',
    answer: 'Sinc function',
    difficulty: 'Medium'
  },
  {
    id: 'fc-ss-3',
    subjectId: 'signal-system',
    question: 'Parseval\'s Theorem?',
    answer: 'Total energy in time domain equals total energy in frequency domain.',
    difficulty: 'Medium'
  },
  {
    id: 'fc-ss-4',
    subjectId: 'signal-system',
    question: 'Causal System?',
    answer: 'Output depends only on present and past inputs.',
    difficulty: 'Easy'
  },
  {
    id: 'fc-ss-5',
    subjectId: 'signal-system',
    question: 'Dirichlet Conditions?',
    answer: 'Conditions for convergence of Fourier Series (Bounded, Finite discontinuities, Finite maxima/minima).',
    difficulty: 'Hard'
  }
];
