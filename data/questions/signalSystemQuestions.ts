
import { Question } from '../../types';

export const signalSystemQuestions: Question[] = [
  {
    id: 'ss-1',
    subjectId: 'signal-system',
    type: 'MCQ',
    text: 'A system is said to be linear if it satisfies:',
    options: ['Additivity only', 'Homogeneity only', 'Both Additivity and Homogeneity', 'Causality'],
    correctAnswer: 'Both Additivity and Homogeneity',
    explanation: 'Linearity requires the principle of superposition, which includes both additivity and homogeneity (scaling).',
    difficulty: 'Easy'
  },
  {
    id: 'ss-2',
    subjectId: 'signal-system',
    type: 'MCQ',
    text: 'Which of the following signals is periodic?',
    options: ['u(t)', 'e^{-t}', 'sin(10πt)', 't*u(t)'],
    correctAnswer: 'sin(10πt)',
    explanation: 'A sinusoidal signal sin(wt) is always periodic. The others are aperiodic (step, exponential decay, ramp).',
    difficulty: 'Easy'
  },
  {
    id: 'ss-3',
    subjectId: 'signal-system',
    type: 'MCQ',
    text: 'The convolution of a signal x(t) with a unit impulse δ(t) results in:',
    options: ['x(t)', 'δ(t)', 'x(-t)', 'Zero'],
    correctAnswer: 'x(t)',
    explanation: 'Convolution with an impulse function is the identity operation: x(t) * δ(t) = x(t).',
    difficulty: 'Easy'
  },
  {
    id: 'ss-4',
    subjectId: 'signal-system',
    type: 'MCQ',
    text: 'For a stable LTI system, the ROC of its Z-transform must include:',
    options: ['The origin', 'The unit circle', 'Infinity', 'Real axis'],
    correctAnswer: 'The unit circle',
    explanation: 'For a discrete-time LTI system to be stable, the Region of Convergence (ROC) of its Z-transform must include the unit circle.',
    difficulty: 'Medium'
  },
  {
    id: 'ss-5',
    subjectId: 'signal-system',
    type: 'MCQ',
    text: 'Aliasing occurs when the sampling frequency fs is:',
    options: ['fs >= 2fm', 'fs = 2fm', 'fs < 2fm', 'fs > 2fm'],
    correctAnswer: 'fs < 2fm',
    explanation: 'Aliasing occurs if the sampling rate is less than the Nyquist rate (2 * max frequency).',
    difficulty: 'Medium'
  }
];
