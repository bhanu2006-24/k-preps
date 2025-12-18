
import { Question } from '../../types';

export const advanceMathematicsQuestions: Question[] = [
  {
    id: 'math-1',
    subjectId: 'advance-mathematics',
    type: 'MCQ',
    text: 'Which numerical method is generally used for solving ordinary differential equations?',
    options: ['Simpson\'s Rule', 'Runge-Kutta Method', 'Newton-Raphson Method', 'Trapezoidal Rule'],
    correctAnswer: 'Runge-Kutta Method',
    explanation: 'Runge-Kutta methods are specifically designed for solving ordinary differential equations (ODEs), whereas Simpson\'s and Trapezoidal are for integration.',
    difficulty: 'Easy'
  },
  {
    id: 'math-2',
    subjectId: 'advance-mathematics',
    type: 'MCQ',
    text: 'What is the sufficient condition for the existance of Laplace transform of f(t)?',
    options: ['f(t) must be bounded', 'f(t) must be periodic', 'f(t) must be of exponential order', 'f(t) must be continuous'],
    correctAnswer: 'f(t) must be of exponential order',
    explanation: 'For the Laplace transform to converge, the function f(t) must be of exponential order and piecewise continuous.',
    difficulty: 'Medium'
  },
  {
    id: 'math-3',
    subjectId: 'advance-mathematics',
    type: 'MCQ',
    text: 'The Fourier transform of the unit impulse function δ(t) is:',
    options: ['1', '0', '2π', 'π'],
    correctAnswer: '1',
    explanation: 'The Fourier transform of a delta function δ(t) is unity (1) for all frequencies.',
    difficulty: 'Easy'
  },
  {
    id: 'math-4',
    subjectId: 'advance-mathematics',
    type: 'MCQ',
    text: 'Which transform is most suitable for solving difference equations?',
    options: ['Laplace Transform', 'Fourier Transform', 'Z-Transform', 'Hankel Transform'],
    correctAnswer: 'Z-Transform',
    explanation: 'Z-transform is the discrete-time equivalent of the Laplace transform and is the standard tool for solving difference equations.',
    difficulty: 'Easy'
  },
  {
    id: 'math-5',
    subjectId: 'advance-mathematics',
    type: 'MCQ',
    text: 'Newton\'s forward interpolation formula is applicable when the intervals are:',
    options: ['Unequal', 'Equal', 'Random', 'Logarithmic'],
    correctAnswer: 'Equal',
    explanation: 'Newton\'s forward and backward interpolation formulas require the data points to be equally spaced.',
    difficulty: 'Easy'
  }
];
