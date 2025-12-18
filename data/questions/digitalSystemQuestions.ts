
import { Question } from '../../types';

export const digitalSystemQuestions: Question[] = [
  {
    id: 'dsd-1',
    subjectId: 'digital-system-design',
    type: 'MCQ',
    text: 'The output of an XOR gate is HIGH only when:',
    options: ['Both inputs are HIGH', 'Both inputs are LOW', 'Inputs are different', 'Inputs are same'],
    correctAnswer: 'Inputs are different',
    explanation: 'XOR (Exclusive OR) outputs 1 if and only if the inputs are not equal (0,1 or 1,0).',
    difficulty: 'Easy'
  },
  {
    id: 'dsd-2',
    subjectId: 'digital-system-design',
    type: 'MCQ',
    text: 'Which code is known as a self-complementing code?',
    options: ['BCD', 'Excess-3', 'Gray Code', 'ASCII'],
    correctAnswer: 'Excess-3',
    explanation: 'Excess-3 code is self-complementing because the 9\'s complement of a decimal number can be obtained by inverting the Excess-3 bits.',
    difficulty: 'Medium'
  },
  {
    id: 'dsd-3',
    subjectId: 'digital-system-design',
    type: 'MCQ',
    text: 'Minimization of logic functions is done using Karnaugh Maps to reduce:',
    options: ['Power consumption', 'Number of gates', 'Propagation delay', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Simplifying logic expressions reduces the gate count, which in turn reduces power and often delay (though primarily gate count).',
    difficulty: 'Medium'
  },
  {
    id: 'dsd-4',
    subjectId: 'digital-system-design',
    type: 'MCQ',
    text: 'A flip-flop is a:',
    options: ['Combinational circuit', 'Sequential circuit', 'Memoryless circuit', 'Linear circuit'],
    correctAnswer: 'Sequential circuit',
    explanation: 'Flip-flops have memory and their output depends on past states, making them sequential circuits.',
    difficulty: 'Easy'
  },
  {
    id: 'dsd-5',
    subjectId: 'digital-system-design',
    type: 'MCQ',
    text: 'Which logic family has the highest speed?',
    options: ['TTL', 'CMOS', 'ECL', 'DTL'],
    correctAnswer: 'ECL',
    explanation: 'Emitter Coupled Logic (ECL) is the fastest logic family because its transistors do not saturate, preventing storage time delays.',
    difficulty: 'Hard'
  }
];
