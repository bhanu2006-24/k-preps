import { Flashcard } from '../../types';

const fc = (id: number, question: string, answer: string, diff: 'Easy' | 'Medium' | 'Hard', mod?: string): Flashcard => ({
  id: `ed-f${id}`,
  subjectId: 'electronic-devices',
  moduleId: mod,
  question,
  answer,
  difficulty: diff
});

export const deviceFlashcards: Flashcard[] = [
  // CO-1: Physics
  fc(1, 'What is Intrinsic Semiconductor?', 'Pure form (Si or Ge) without doping.', 'Easy', 'CO-1'),
  fc(2, 'Majority carriers in N-type?', 'Electrons.', 'Easy', 'CO-1'),
  fc(3, 'Mass Action Law?', 'np = ni^2.', 'Medium', 'CO-1'),
  fc(4, 'What is Fermi Level?', 'Energy level with 50% probability of occupation.', 'Hard', 'CO-1'),
  fc(5, 'Drift Current depends on?', 'Electric Field.', 'Medium', 'CO-1'),
  fc(6, 'Diffusion Current depends on?', 'Concentration Gradient.', 'Medium', 'CO-1'),
  
  // CO-2: Diodes & BJT
  fc(7, 'Knee Voltage for Si?', '0.7V.', 'Easy', 'CO-2'),
  fc(8, 'Zener Diode uses?', 'Reverse Breakdown Region.', 'Medium', 'CO-2'),
  fc(9, 'Rectifier converts?', 'AC to Pulsating DC.', 'Easy', 'CO-2'),
  fc(10, 'Alpha of Transistor?', 'Ic / Ie (Common Base gain).', 'Medium', 'CO-2'),
  fc(11, 'Beta of Transistor?', 'Ic / Ib (Common Emitter gain).', 'Medium', 'CO-2'),
  fc(12, 'Active Region Bias?', 'EB Junc Fwd, CB Junc Rev.', 'Hard', 'CO-2'),
  fc(13, 'Highest Input Impedance Config?', 'Common Collector (CC).', 'Medium', 'CO-2'),
  
  // CO-3: MOSFET
  fc(14, 'FET is controlled by?', 'Voltage (Electric Field).', 'Easy', 'CO-3'),
  fc(15, 'MOSFET terminals?', 'Gate, Drain, Source, Body.', 'Medium', 'CO-3'),
  fc(16, 'Pinch Off Voltage?', 'Vgs where drain current becomes constant.', 'Hard', 'CO-3'),
  fc(17, 'Input Impedance of MOSFET?', 'Extremely High (due to Oxide).', 'Easy', 'CO-3'),
  fc(18, 'CMOS stands for?', 'Complementary Metal Oxide Semiconductor.', 'Easy', 'CO-3'),
  fc(19, 'Transconductance (gm) unit?', 'Siemens or Mho.', 'Medium', 'CO-3'),
  
  // CO-4: Applications
  fc(20, 'LED Principle?', 'Electroluminescence (Recombination).', 'Medium', 'CO-4'),
  fc(21, 'Photodiode Bias?', 'Reverse Bias.', 'Medium', 'CO-4'),
  fc(22, 'Solar Cell Quadrant?', '4th Quadrant (Power Source).', 'Hard', 'CO-4'),
  fc(23, 'Op-Amp Ideal Gain?', 'Infinite.', 'Easy', 'CO-4'),
  fc(24, 'Virtual Ground?', 'Voltage at inverting terminal approx equals non-inverting.', 'Hard', 'CO-4'),
  
  // CO-5: Fabrication
  fc(25, 'Lithography uses?', 'UV Light to transfer patterns.', 'Medium', 'CO-5'),
  fc(26, 'Oxidation creates?', 'SiO2 (Insulator) layer.', 'Medium', 'CO-5'),
  fc(27, 'Etching is?', 'Removal of unwanted material.', 'Easy', 'CO-5'),
  fc(28, 'Doping methods?', 'Diffusion and Ion Implantation.', 'Medium', 'CO-5'),
  fc(29, 'Moore\'s Law?', 'Transistor count doubles every ~2 years.', 'Easy', 'CO-5'),
  fc(30, 'Clean Room?', 'Environment with low particulate pollutants for Fab.', 'Easy', 'CO-5'),
];