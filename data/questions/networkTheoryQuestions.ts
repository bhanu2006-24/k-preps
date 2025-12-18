
import { Question } from '../../types';

export const networkTheoryQuestions: Question[] = [
  {
    id: 'nt-1',
    subjectId: 'network-theory',
    type: 'MCQ',
    text: 'Kirchhoff\'s Current Law (KCL) is based on the conservation of:',
    options: ['Energy', 'Charge', 'Momentum', 'Power'],
    correctAnswer: 'Charge',
    explanation: 'KCL states that the sum of currents entering a node equals the sum leaving, representing conservation of charge.',
    difficulty: 'Easy'
  },
  {
    id: 'nt-2',
    subjectId: 'network-theory',
    type: 'MCQ',
    text: 'In a series RLC circuit at resonance, the impedance is:',
    options: ['Maximum', 'Minimum', 'Zero', 'Infinite'],
    correctAnswer: 'Minimum',
    explanation: 'At resonance in a series RLC circuit, the inductive and capacitive reactances cancel out, leaving only the resistance (minimum impedance).',
    difficulty: 'Medium'
  },
  {
    id: 'nt-3',
    subjectId: 'network-theory',
    type: 'MCQ',
    text: 'The unit of the ABCD parameter "A" is:',
    options: ['Ohm', 'Mho', 'Dimensionless', 'Volt'],
    correctAnswer: 'Dimensionless',
    explanation: 'Parameter A is the voltage gain factor (V1/V2 when I2=0), so it is a ratio of voltages and is dimensionless.',
    difficulty: 'Hard'
  },
  {
    id: 'nt-4',
    subjectId: 'network-theory',
    type: 'MCQ',
    text: 'Superposition theorem is applicable only to circuits that are:',
    options: ['Linear', 'Non-linear', 'Time-varying', 'Passive'],
    correctAnswer: 'Linear',
    explanation: 'Superposition relies on linearity (additivity and homogeneity), so it only applies to linear circuits.',
    difficulty: 'Easy'
  },
  {
    id: 'nt-5',
    subjectId: 'network-theory',
    type: 'MCQ',
    text: 'The Laplace transform of a capacitor with initial voltage V0 is modeled as:',
    options: ['1/sC in parallel with V0/s', '1/sC in series with V0/s', 'sC in series with V0', '1/sC only'],
    correctAnswer: '1/sC in series with V0/s',
    explanation: 'In the s-domain, a charged capacitor is modeled as an impedance 1/sC in series with a voltage source V0/s opposing the current.',
    difficulty: 'Hard'
  }
];
