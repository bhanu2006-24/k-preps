
import { Flashcard } from '../../types';

export const realFlashcards: Flashcard[] = [
  // --- Advance Mathematics ---
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
  },

  // --- Signals & Systems ---
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
  },

  // --- Network Theory ---
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
  },

  // --- Digital System Design ---
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
  },

  // --- Electronic Devices ---
  {
    id: 'fc-ed-1',
    subjectId: 'electronic-devices',
    question: 'Mass Action Law?',
    answer: 'n * p = ni^2',
    difficulty: 'Easy'
  },
  {
    id: 'fc-ed-2',
    subjectId: 'electronic-devices',
    question: 'Depletion Region?',
    answer: 'Region near PN junction with immobile ions and no free carriers.',
    difficulty: 'Easy'
  },
  {
    id: 'fc-ed-3',
    subjectId: 'electronic-devices',
    question: 'BJT Beta (β)?',
    answer: 'Common Emitter Current Gain (Ic / Ib).',
    difficulty: 'Easy'
  },
  {
    id: 'fc-ed-4',
    subjectId: 'electronic-devices',
    question: 'Pinch-off Voltage (Vp)?',
    answer: 'Vgs at which drain current becomes constant (saturation) in JFET.',
    difficulty: 'Medium'
  },
  {
    id: 'fc-ed-5',
    subjectId: 'electronic-devices',
    question: 'Diffusion Current?',
    answer: 'Current due to concentration gradient of carriers.',
    difficulty: 'Medium'
  },

  // --- Technical Communication ---
  {
    id: 'fc-tc-1',
    subjectId: 'technical-communication',
    question: '7 Cs of Communication?',
    answer: 'Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous.',
    difficulty: 'Medium'
  },
  {
    id: 'fc-tc-2',
    subjectId: 'technical-communication',
    question: 'Proxemics?',
    answer: 'Study of physical space in communication.',
    difficulty: 'Medium'
  },
  {
    id: 'fc-tc-3',
    subjectId: 'technical-communication',
    question: 'Chronemics?',
    answer: 'Study of time usage in communication.',
    difficulty: 'Medium'
  }
];
