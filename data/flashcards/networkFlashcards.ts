import { Flashcard } from '../../types';

// Helpers to generate ID
const fc = (id: number, question: string, answer: string, diff: 'Easy' | 'Medium' | 'Hard', mod?: string): Flashcard => ({
  id: `nt-f${id}`,
  subjectId: 'network-theory',
  moduleId: mod,
  question,
  answer,
  difficulty: diff
});

export const networkFlashcards: Flashcard[] = [
  // CO-1: Basics & Theorems
  fc(1, 'What is KCL?', 'Algebraic sum of currents at a node is zero.', 'Easy', 'CO-1'),
  fc(2, 'Thevenin Voltage Vth is?', 'Open circuit voltage across load terminals.', 'Easy', 'CO-1'),
  fc(3, 'Norton Current Isc is?', 'Short circuit current across load terminals.', 'Easy', 'CO-1'),
  fc(4, 'Superposition Theorem is valid for?', 'Linear bilateral networks only.', 'Medium', 'CO-1'),
  fc(5, 'What is a mesh?', 'A loop that contains no other loops.', 'Easy', 'CO-1'),
  fc(6, 'Source Transformation V to I?', 'I = V/R in parallel with R.', 'Easy', 'CO-1'),
  fc(7, 'Dependent Source shape?', 'Diamond shape.', 'Easy', 'CO-1'),
  fc(8, 'Ideal Voltage Source R_in?', 'Zero.', 'Easy', 'CO-1'),
  
  // CO-2: Frequency Domain (AC)
  fc(9, 'Resonance Condition?', 'XL = XC.', 'Easy', 'CO-5'),
  fc(10, 'Q-Factor formula (Series)?', '(1/R) * sqrt(L/C).', 'Medium', 'CO-5'),
  fc(11, 'Bandwidth and Q relation?', 'BW = f_r / Q.', 'Medium', 'CO-5'),
  fc(12, 'Power Factor at Resonance?', 'Unity (1).', 'Easy', 'CO-5'),
  fc(13, 'Dynamic Resistance of Parallel LC?', 'L / (CR).', 'Hard', 'CO-5'),
  fc(14, 'Admittance Y is?', '1 / Impedance (Z).', 'Easy', 'CO-2'),
  
  // CO-3: Transients
  fc(15, 'Time constant RL circuit?', 'L / R.', 'Medium', 'CO-3'),
  fc(16, 'Time constant RC circuit?', 'R * C.', 'Medium', 'CO-3'),
  fc(17, 'Inductor at t=0+ (uncharged)?', 'Open Circuit.', 'Medium', 'CO-3'),
  fc(18, 'Capacitor at t=0+ (uncharged)?', 'Short Circuit.', 'Medium', 'CO-3'),
  fc(19, 'Laplace of Unit Step?', '1/s.', 'Easy', 'CO-3'),
  fc(20, 'Final Value Theorem?', 'lim(s->0) sF(s).', 'Hard', 'CO-3'),
  
  // CO-4: Two Port
  fc(21, 'Z Parameters are?', 'Impedance parameters (V1, V2 as func of I1, I2).', 'Easy', 'CO-4'),
  fc(22, 'Reciprocity in Z parameters?', 'Z12 = Z21.', 'Medium', 'CO-4'),
  fc(23, 'Symmetry in Y parameters?', 'Y11 = Y22.', 'Medium', 'CO-4'),
  fc(24, 'ABCD Parameters used for?', 'Cascaded networks.', 'Easy', 'CO-4'),
  fc(25, 'Condition for Reciprocity in ABCD?', 'AD - BC = 1.', 'Hard', 'CO-4'),
  fc(26, 'h-parameters input impedance?', 'h11.', 'Medium', 'CO-4'),
  
  // Misc
  fc(27, 'Energy in Inductor?', '0.5 * L * I^2.', 'Easy', 'CO-1'),
  fc(28, 'Energy in Capacitor?', '0.5 * C * V^2.', 'Easy', 'CO-1'),
  fc(29, 'Active Power Unit?', 'Watts (W).', 'Easy', 'CO-2'),
  fc(30, 'Reactive Power Unit?', 'VAR.', 'Easy', 'CO-2'),
];