import { Question } from '../../types';

// Helper to generate IDs
const q = (id: number, type: 'MCQ' | 'BOOLEAN', text: string, answer: string, opts?: string[], expl?: string, diff: 'Easy'|'Medium'|'Hard' = 'Medium', mod: string = 'CO-1'): Question => ({
  id: `nt-q${id}`,
  subjectId: 'network-theory',
  moduleId: mod,
  type,
  text,
  options: opts,
  correctAnswer: answer,
  explanation: expl,
  difficulty: diff
});

export const networkQuestions: Question[] = [
  // --- CO-1: Basics & Theorems (1-50) ---
  q(1, 'MCQ', 'KCL is based on conservation of:', 'Charge', ['Energy', 'Charge', 'Momentum', 'Mass'], 'Charge cannot be created or destroyed.', 'Easy', 'CO-1'),
  q(2, 'MCQ', 'KVL is based on conservation of:', 'Energy', ['Charge', 'Energy', 'Power', 'Current'], 'Sum of potential drops = Sum of potential rises.', 'Easy', 'CO-1'),
  q(3, 'MCQ', 'Unit of resistivity is:', 'Ohm-meter', ['Ohm', 'Ohm-meter', 'Mho', 'Siemens'], undefined, 'Easy', 'CO-1'),
  q(4, 'BOOLEAN', 'An ideal voltage source has zero internal resistance.', 'True', undefined, 'It maintains voltage regardless of current.', 'Easy', 'CO-1'),
  q(5, 'MCQ', 'Thevenin Resistance is found by:', 'Shorting V-sources, Opening I-sources', ['Shorting both', 'Opening both', 'Shorting V-sources, Opening I-sources', 'Opening V, Shorting I'], undefined, 'Medium', 'CO-1'),
  q(6, 'MCQ', 'For MPT, if Source has R_s, Load R_L should be:', 'R_s', ['0', 'Infinite', 'R_s', '2 R_s'], undefined, 'Medium', 'CO-1'),
  q(7, 'BOOLEAN', 'Norton equivalent is a current source in parallel with resistor.', 'True', undefined, undefined, 'Medium', 'CO-1'),
  q(8, 'MCQ', 'Superposition theorem applies to:', 'Voltage and Current', ['Power', 'Voltage and Current', 'Non-linear elements', 'None'], 'Power is non-linear.', 'Medium', 'CO-1'),
  q(9, 'MCQ', 'Mesh analysis uses:', 'KVL', ['KCL', 'KVL', 'Ohm only', 'None'], 'Mesh currents are defined in loops.', 'Easy', 'CO-1'),
  q(10, 'MCQ', 'Nodal analysis uses:', 'KCL', ['KCL', 'KVL', 'Both', 'Neither'], undefined, 'Easy', 'CO-1'),
  q(11, 'MCQ', 'Internal resistance of ideal current source:', 'Infinite', ['Zero', 'Infinite', '1 Ohm', '100 Ohm'], undefined, 'Easy', 'CO-1'),
  q(12, 'BOOLEAN', 'Kirchhoff laws are valid for lumped circuits only.', 'True', undefined, 'Not valid for distributed parameters (Transmission lines).', 'Medium', 'CO-1'),
  q(13, 'MCQ', 'Star to Delta: Resistor becomes?', 'Larger', ['Smaller', 'Larger', 'Same', 'Zero'], 'R_delta = 3 * R_star (if equal).', 'Medium', 'CO-1'),
  q(14, 'MCQ', 'Number of equations in Nodal analysis for N nodes?', 'N-1', ['N', 'N-1', 'N+1', '2N'], 'One is reference node.', 'Medium', 'CO-1'),
  q(15, 'MCQ', 'Number of equations in Mesh analysis for B branches and N nodes?', 'B-N+1', ['B-N', 'B-N+1', 'N-1', 'B'], undefined, 'Hard', 'CO-1'),
  q(16, 'MCQ', 'Tellegen Theorem implies conservation of:', 'Energy', ['Charge', 'Energy', 'Flux', 'Momentum'], undefined, 'Medium', 'CO-1'),
  q(17, 'BOOLEAN', 'Reciprocity Theorem applies to networks with dependent sources.', 'False', undefined, 'Only passive bilateral networks.', 'Hard', 'CO-1'),
  q(18, 'MCQ', 'Millman Theorem converts parallel voltage sources to:', 'One V source', ['One I source', 'One V source', 'One R', 'None'], undefined, 'Medium', 'CO-1'),
  q(19, 'MCQ', 'Dual of Voltage Source is:', 'Current Source', ['Resistor', 'Inductor', 'Current Source', 'Capacitor'], undefined, 'Easy', 'CO-1'),
  q(20, 'MCQ', 'Dual of KVL is:', 'KCL', ['Ohm Law', 'KCL', 'Superposition', 'Thevenin'], undefined, 'Easy', 'CO-1'),

  // --- CO-2: Frequency Domain (51-80) ---
  q(51, 'MCQ', 'Power consumed by a pure inductor in AC circuit is:', 'Zero', ['Infinite', 'Unity', 'Zero', 'VI cos(phi)'], 'Avg power over a cycle is zero.', 'Easy', 'CO-2'),
  q(52, 'MCQ', 'Reciprocal of Impedance is:', 'Admittance', ['Conductance', 'Susceptance', 'Admittance', 'Reactance'], undefined, 'Easy', 'CO-2'),
  q(53, 'MCQ', 'Unit of Inductance:', 'Henry', ['Farad', 'Henry', 'Weber', 'Tesla'], undefined, 'Easy', 'CO-2'),
  q(54, 'MCQ', 'In pure inductive circuit, current:', 'Lags voltage by 90', ['Leads by 90', 'Lags by 90', 'In phase', 'Lags by 45'], undefined, 'Medium', 'CO-2'),
  q(55, 'MCQ', 'In pure capacitive circuit, current:', 'Leads voltage by 90', ['Lags by 90', 'Leads by 90', 'In phase', 'Leads by 180'], undefined, 'Medium', 'CO-2'),
  q(56, 'MCQ', 'Form factor of sine wave:', '1.11', ['1.414', '1.11', '0.707', '0.637'], undefined, 'Easy', 'CO-2'),
  q(57, 'MCQ', 'RMS value of I_m sin(wt) is:', 'I_m / sqrt(2)', ['I_m', '2 I_m', 'I_m / sqrt(2)', 'I_m / 2'], undefined, 'Easy', 'CO-2'),
  q(58, 'BOOLEAN', 'Impedance is a phasor.', 'False', undefined, 'It is a complex operator, not a phasor.', 'Hard', 'CO-2'),
  q(59, 'MCQ', 'Susceptance (B) is imaginary part of:', 'Admittance', ['Impedance', 'Admittance', 'Resistance', 'Reactance'], undefined, 'Medium', 'CO-2'),
  q(60, 'MCQ', 'Power Factor is:', 'cos(phi)', ['sin(phi)', 'tan(phi)', 'cos(phi)', 'sec(phi)'], undefined, 'Easy', 'CO-2'),

  // --- CO-3: Transients (81-120) ---
  q(81, 'MCQ', 'Time constant of RL circuit is:', 'L/R', ['R/L', 'L/R', 'RL', '1/RL'], undefined, 'Medium', 'CO-3'),
  q(82, 'MCQ', 'Time constant of RC circuit is:', 'RC', ['R/C', 'RC', 'C/R', '1/RC'], undefined, 'Easy', 'CO-3'),
  q(83, 'BOOLEAN', 'Inductor acts as Short Circuit at t = infinity (DC steady state).', 'True', undefined, 'Frequency is zero, XL is zero.', 'Medium', 'CO-3'),
  q(84, 'MCQ', 'Capacitor at t=0+ acts as:', 'Voltage Source', ['Current Source', 'Voltage Source', 'Resistor', 'Inductor'], 'Maintains voltage from t=0-.', 'Hard', 'CO-3'),
  q(85, 'MCQ', 'Laplace of e^(-at) is:', '1/(s+a)', ['1/(s-a)', '1/(s+a)', 's/(s+a)', 'a/(s+a)'], undefined, 'Medium', 'CO-3'),
  q(86, 'MCQ', 'Laplace of sin(wt) is:', 'w/(s^2+w^2)', ['s/(s^2+w^2)', 'w/(s^2+w^2)', 'w/(s^2-w^2)', 's/(s^2-w^2)'], undefined, 'Medium', 'CO-3'),
  q(87, 'MCQ', 'Final value theorem is valid only if poles are in:', 'Left Half Plane', ['Right Half Plane', 'Left Half Plane', 'Imaginary Axis', 'Origin'], undefined, 'Hard', 'CO-3'),
  q(88, 'BOOLEAN', 'Transient response dies out at steady state.', 'True', undefined, undefined, 'Easy', 'CO-3'),
  q(89, 'MCQ', 'Initial current in Inductor cannot change because:', 'Energy cannot change instantly', ['Voltage is constant', 'Resistance is zero', 'Energy cannot change instantly', 'None'], undefined, 'Medium', 'CO-3'),
  q(90, 'MCQ', 'Transient behavior is due to:', 'Stored Energy', ['Resistance', 'Sources', 'Stored Energy', 'Heat'], undefined, 'Medium', 'CO-3'),

  // --- CO-4: Two Port (121-160) ---
  q(121, 'MCQ', 'Z-parameters are:', 'Impedance', ['Admittance', 'Impedance', 'Hybrid', 'Transmission'], undefined, 'Easy', 'CO-4'),
  q(122, 'MCQ', 'Condition for Reciprocity in Z-parameters:', 'Z12 = Z21', ['Z11=Z22', 'Z12=Z21', 'Z11=Z12', 'AD-BC=1'], undefined, 'Medium', 'CO-4'),
  q(123, 'MCQ', 'Condition for Symmetry in h-parameters:', 'h11h22 - h12h21 = 1', ['h11=h22', 'h12=-h21', 'h11h22 - h12h21 = 1', 'None'], undefined, 'Hard', 'CO-4'),
  q(124, 'MCQ', 'ABCD parameters are also called:', 'Transmission', ['Hybrid', 'Inverse Hybrid', 'Transmission', 'Short Circuit'], undefined, 'Easy', 'CO-4'),
  q(125, 'MCQ', 'For cascade connection, we multiply:', 'ABCD matrices', ['Z matrices', 'Y matrices', 'ABCD matrices', 'h matrices'], undefined, 'Medium', 'CO-4'),
  q(126, 'MCQ', 'Y-parameters are also called:', 'Short Circuit Admittance', ['Open Circuit Impedance', 'Short Circuit Admittance', 'Hybrid', 'Inverse'], undefined, 'Medium', 'CO-4'),
  q(127, 'BOOLEAN', 'h-parameters are mixed parameters (V and I).', 'True', undefined, undefined, 'Medium', 'CO-4'),
  q(128, 'MCQ', 'AD - BC = 1 is condition for:', 'Reciprocity in ABCD', ['Symmetry in ABCD', 'Reciprocity in ABCD', 'Lossless', 'None'], undefined, 'Medium', 'CO-4'),
  q(129, 'MCQ', 'Z11 is called:', 'Driving point impedance', ['Transfer impedance', 'Driving point impedance', 'Admittance', 'Gain'], undefined, 'Medium', 'CO-4'),
  q(130, 'MCQ', 'If two ports are in series, we add:', 'Z Matrices', ['Y Matrices', 'h Matrices', 'T Matrices'], undefined, 'Medium', 'CO-4'),

  // --- CO-5: Resonance & Filters (161-200) ---
  q(161, 'MCQ', 'At series resonance, Impedance is:', 'Minimum', ['Maximum', 'Minimum', 'Zero', 'Infinite'], 'Z = R', 'Medium', 'CO-5'),
  q(162, 'MCQ', 'At parallel resonance, Impedance is:', 'Maximum', ['Minimum', 'Maximum', 'Zero', 'Infinite'], 'Z = L/CR (Dynamic Resistance)', 'Medium', 'CO-5'),
  q(163, 'MCQ', 'Q-factor of series RLC:', '(1/R) * sqrt(L/C)', ['R * sqrt(C/L)', '(1/R) * sqrt(L/C)', 'sqrt(LC)', '1/sqrt(LC)'], undefined, 'Hard', 'CO-5'),
  q(164, 'MCQ', 'Power factor at resonance is:', 'Unity', ['Zero', '0.5', 'Unity', '0.8'], undefined, 'Easy', 'CO-5'),
  q(165, 'MCQ', 'Bandwidth is related to Q as:', 'f_r / Q', ['f_r * Q', 'f_r / Q', 'Q / f_r', '1/Q'], undefined, 'Medium', 'CO-5'),
  q(166, 'BOOLEAN', 'Current is maximum at series resonance.', 'True', undefined, undefined, 'Easy', 'CO-5'),
  q(167, 'MCQ', 'Low pass filter passes frequencies:', 'Below cutoff', ['Above cutoff', 'Below cutoff', 'Band', 'All'], undefined, 'Easy', 'CO-5'),
  q(168, 'MCQ', 'High Q factor means:', 'High Selectivity', ['Low Selectivity', 'High Bandwidth', 'High Loss', 'None'], undefined, 'Medium', 'CO-5'),
  q(169, 'MCQ', 'Voltage Magnification occurs in:', 'Series Resonance', ['Parallel Resonance', 'Series Resonance', 'RC Circuit', 'RL Circuit'], undefined, 'Medium', 'CO-5'),
  q(170, 'MCQ', 'Current Magnification occurs in:', 'Parallel Resonance', ['Series Resonance', 'Parallel Resonance', 'RC Circuit', 'RL Circuit'], undefined, 'Medium', 'CO-5'),
];