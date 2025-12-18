import { Question } from '../../types';

export const mathQuestions: Question[] = [
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

export const signalQuestions: Question[] = [
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

export const networkQuestionsReal: Question[] = [
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

export const devicesQuestions: Question[] = [
  {
    id: 'ed-1',
    subjectId: 'electronic-devices',
    type: 'MCQ',
    text: 'In an intrinsic semiconductor, the Fermi level lies:',
    options: ['Near the conduction band', 'Near the valence band', 'Exactly in the middle of the band gap', 'Outside the band gap'],
    correctAnswer: 'Exactly in the middle of the band gap',
    explanation: 'For pure (intrinsic) semiconductors, the probability of finding an electron is symmetric, placing Fermi level in the center.',
    difficulty: 'Easy'
  },
  {
    id: 'ed-2',
    subjectId: 'electronic-devices',
    type: 'MCQ',
    text: 'The Early Effect in a BJT is caused by the modulation of:',
    options: ['Base Width', 'Emitter Width', 'Collector Width', 'Dopping Concentration'],
    correctAnswer: 'Base Width',
    explanation: 'Early effect (Base-Width Modulation) is the variation in effective base width due to changes in collector-base reverse bias.',
    difficulty: 'Medium'
  },
  {
    id: 'ed-3',
    subjectId: 'electronic-devices',
    type: 'MCQ',
    text: 'A MOSFET operates in saturation region when:',
    options: ['Vds < Vgs - Vt', 'Vds > Vgs - Vt', 'Vgs < Vt', 'Vds = 0'],
    correctAnswer: 'Vds > Vgs - Vt',
    explanation: 'Saturation (active mode for MOSFET) occurs when the channel is pinched off at the drain end, requiring Vds > Vgs - Vt.',
    difficulty: 'Medium'
  },
  {
    id: 'ed-4',
    subjectId: 'electronic-devices',
    type: 'MCQ',
    text: 'Which diode is used for voltage regulation?',
    options: ['PN Junction Diode', 'Zener Diode', 'Schottky Diode', 'LED'],
    correctAnswer: 'Zener Diode',
    explanation: 'Zener diodes are designed to operate in reverse breakdown, maintaining a constant voltage, making them ideal for regulation.',
    difficulty: 'Easy'
  },
  {
    id: 'ed-5',
    subjectId: 'electronic-devices',
    type: 'MCQ',
    text: 'The current transport in a BJT is due to:',
    options: ['Majority carriers only', 'Minority carriers only', 'Both majority and minority carriers', 'Electrons only'],
    correctAnswer: 'Both majority and minority carriers',
    explanation: 'BJTs are Bipolar devices, meaning conduction involves both holes and electrons (minority and majority carriers).',
    difficulty: 'Medium'
  }
];

export const digitalQuestions: Question[] = [
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

export const commQuestions: Question[] = [
  {
    id: 'tc-1',
    subjectId: 'technical-communication',
    type: 'MCQ',
    text: 'Which of the following is NOT a barrier to communication?',
    options: ['Noise', 'Feedback', 'Technical Jargon', 'Cultural Differences'],
    correctAnswer: 'Feedback',
    explanation: 'Feedback is a crucial part of the effective communication loop, not a barrier. It confirms understanding.',
    difficulty: 'Easy'
  },
  {
    id: 'tc-2',
    subjectId: 'technical-communication',
    type: 'MCQ',
    text: 'In technical writing, "Conciseness" means:',
    options: ['Using difficult words', 'Using few words to convey the message', 'Writing long paragraphs', 'Repeating ideas'],
    correctAnswer: 'Using few words to convey the message',
    explanation: 'Conciseness involves conveying the intended meaning using the fewest possible words without sacrificing clarity.',
    difficulty: 'Easy'
  },
  {
    id: 'tc-3',
    subjectId: 'technical-communication',
    type: 'MCQ',
    text: 'Kinesics in communication refers to:',
    options: ['Space language', 'Time language', 'Body language', 'Touch language'],
    correctAnswer: 'Body language',
    explanation: 'Kinesics is the study of non-verbal communication related to body movements, gestures, and facial expressions.',
    difficulty: 'Medium'
  },
  {
    id: 'tc-4',
    subjectId: 'technical-communication',
    type: 'MCQ',
    text: 'A formal technical report should always include:',
    options: ['Slang', 'Abstract/Executive Summary', 'Personal emotions', 'Unverified data'],
    correctAnswer: 'Abstract/Executive Summary',
    explanation: 'An abstract or executive summary provides a brief overview of the report\'s content, essential for formal technical documents.',
    difficulty: 'Easy'
  },
  {
    id: 'tc-5',
    subjectId: 'technical-communication',
    type: 'MCQ',
    text: 'Which listening type involves analyzing and evaluating the message?',
    options: ['Passive listening', 'Critical listening', 'Appreciative listening', 'Marginal listening'],
    correctAnswer: 'Critical listening',
    explanation: 'Critical listening involves analyzing, evaluating, and judging the content of the message.',
    difficulty: 'Medium'
  }
];
