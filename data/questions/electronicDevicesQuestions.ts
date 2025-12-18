
import { Question } from '../../types';

export const electronicDevicesQuestions: Question[] = [
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
