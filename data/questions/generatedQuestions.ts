
import { Question } from '../../types';

export const mathQuestions: Question[] = [
  ...Array.from({ length: 50 }, (_, i) => ({
    id: `math-q-${i}`,
    subjectId: 'advance-mathematics',
    type: 'MCQ' as const,
    text: `What is the value of the integral ∫(x^${i % 3}) dx?`,
    options: [`x^${(i % 3) + 1}/${(i % 3) + 1}`, `x^${i % 3}`, `(x^${i % 3} + 1)`, `None of these`],
    correctAnswer: `x^${(i % 3) + 1}/${(i % 3) + 1}`,
    explanation: 'Basic integration power rule: ∫x^n dx = (x^(n+1))/(n+1) + C',
    difficulty: (i % 3 === 0 ? 'Easy' : i % 3 === 1 ? 'Medium' : 'Hard') as 'Easy' | 'Medium' | 'Hard'
  })),
   ...Array.from({ length: 50 }, (_, i) => ({
    id: `math-complex-${i}`,
    subjectId: 'advance-mathematics',
    type: 'MCQ' as const,
    text: `Identify the analytic function f(z) where u = x^${(i % 2)+2} - y^${(i % 2)+2}`,
    options: [`Different for each case`, `Constant`, `Analytic`, `Non-Analytic`],
    correctAnswer: `Non-Analytic`,
    explanation: 'Checking Cauchy-Riemann equations.',
    difficulty: 'Medium' as 'Easy' | 'Medium' | 'Hard'
  }))
];

export const signalQuestions: Question[] = [
  ...Array.from({ length: 40 }, (_, i) => ({
    id: `sig-q-${i}`,
    subjectId: 'signal-system',
    type: 'MCQ' as const,
    text: `Determine the periodicity of signal x(n) = sin(${10 + i}πn).`,
    options: [`Periodic`, `Aperiodic`, `Quasi-periodic`, `Random`],
    correctAnswer: `Periodic`,
    explanation: 'A discrete time sinusoidal is periodic if frequency is a rational multiple of 2π.',
    difficulty: (i % 2 === 0 ? 'Easy' : 'Medium') as 'Easy' | 'Medium' | 'Hard'
  })),
  ...Array.from({ length: 60 }, (_, i) => ({
    id: `sig-ft-${i}`,
    subjectId: 'signal-system',
    type: 'MCQ' as const,
    text: `What is the Fourier Transform of a delta function δ(t-${i})?`,
    options: [`e^(-jω${i})`, `1`, `e^(jω${i})`, `0`],
    correctAnswer: `e^(-jω${i})`,
    explanation: 'Time shifting property of Fourier Transform.',
    difficulty: 'Medium' as 'Easy' | 'Medium' | 'Hard'
  }))
];

export const programmingQuestions: Question[] = [
    ...Array.from({ length: 100 }, (_, i) => ({
        id: `prog-q-${i}`,
        subjectId: 'computer-programming',
        type: 'MCQ' as const,
        text: `What is the output of the following C snippet: int x=${i}; printf("%d", x++);?`,
        options: [`${i}`, `${i+1}`, `${i-1}`, `Error`],
        correctAnswer: `${i}`,
        explanation: 'Post-increment operator uses the value then increments.',
        difficulty: 'Easy' as 'Easy' | 'Medium' | 'Hard'
    }))
];

export const commQuestions: Question[] = [
    ...Array.from({ length: 100 }, (_, i) => ({
        id: `comm-q-${i}`,
        subjectId: 'technical-communication',
        type: 'MCQ' as const,
        text: `Which of these is a barrier to effective communication? (Scenario ${i})`,
        options: [`Noise`, `Clarity`, `Feedback`, `Channel`],
        correctAnswer: `Noise`,
        explanation: 'Noise physically or psychologically distorts the message.',
        difficulty: 'Easy' as 'Easy' | 'Medium' | 'Hard'
    }))
];
