
import { Flashcard } from '../../types';

export const advanceMathematicsFlashcards: Flashcard[] = [
  {
    id: 'fc-math-1',
    subjectId: 'advance-mathematics',
    question: 'Condition for Exact Differential Equation?',
    answer: '∂M/∂y = ∂N/∂x for Mdx + Ndy = 0.',
    difficulty: 'Easy'
  },
  {
    id: 'fc-math-2',
    subjectId: 'advance-mathematics',
    question: 'Laplace of Unit Step u(t)?',
    answer: '1/s',
    difficulty: 'Easy'
  },
  {
    id: 'fc-math-3',
    subjectId: 'advance-mathematics',
    question: 'Cauchy-Riemann Equations?',
    answer: 'ux = vy and uy = -vx',
    difficulty: 'Medium'
  },
  {
    id: 'fc-math-4',
    subjectId: 'advance-mathematics',
    question: 'Z-Transform of δ(n)?',
    answer: '1',
    difficulty: 'Easy'
  },
  {
    id: 'fc-math-5',
    subjectId: 'advance-mathematics',
    question: 'Simpson\'s 1/3 Rule Formula?',
    answer: '(h/3) * [(y0 + yn) + 4(Odd terms) + 2(Even terms)]',
    difficulty: 'Hard'
  }
];
