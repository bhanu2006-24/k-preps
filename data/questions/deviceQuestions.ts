import { Question } from '../../types';

const q = (id: number, type: 'MCQ' | 'BOOLEAN', text: string, answer: string, opts?: string[], expl?: string, diff: 'Easy'|'Medium'|'Hard' = 'Medium', mod: string = 'CO-1'): Question => ({
  id: `ed-q${id}`,
  subjectId: 'electronic-devices',
  moduleId: mod,
  type,
  text,
  options: opts,
  correctAnswer: answer,
  explanation: expl,
  difficulty: diff
});

export const deviceQuestions: Question[] = [
  // --- CO-1: Physics (1-50) ---
  q(1, 'MCQ', 'At 0K, a semiconductor behaves as:', 'Insulator', ['Conductor', 'Insulator', 'Superconductor', 'Resistor'], undefined, 'Easy', 'CO-1'),
  q(2, 'MCQ', 'Energy gap of Ge is:', '0.7 eV', ['1.1 eV', '0.7 eV', '1.5 eV', '0.3 eV'], undefined, 'Easy', 'CO-1'),
  q(3, 'MCQ', 'Energy gap of Si is:', '1.1 eV', ['1.1 eV', '0.7 eV', '1.4 eV', '0.2 eV'], undefined, 'Easy', 'CO-1'),
  q(4, 'MCQ', 'Pentavalent impurity creates:', 'N-type', ['P-type', 'N-type', 'Intrinsic', 'Insulator'], undefined, 'Easy', 'CO-1'),
  q(5, 'MCQ', 'Trivalent impurity creates:', 'P-type', ['N-type', 'P-type', 'Metal', 'None'], undefined, 'Easy', 'CO-1'),
  q(6, 'MCQ', 'Fermi level in N-type is near:', 'Conduction Band', ['Valence Band', 'Conduction Band', 'Middle', 'Bottom'], undefined, 'Medium', 'CO-1'),
  q(7, 'BOOLEAN', 'Mass Action Law is np = ni^2.', 'True', undefined, undefined, 'Easy', 'CO-1'),
  q(8, 'MCQ', 'Mobility of electrons is __ than holes.', 'Higher', ['Lower', 'Higher', 'Equal', 'Zero'], 'Electrons have lower effective mass.', 'Medium', 'CO-1'),
  q(9, 'MCQ', 'Diffusion current is due to:', 'Concentration Gradient', ['Electric Field', 'Concentration Gradient', 'Temperature', 'Pressure'], undefined, 'Easy', 'CO-1'),
  q(10, 'MCQ', 'Drift current is due to:', 'Electric Field', ['Concentration Gradient', 'Electric Field', 'Doping', 'None'], undefined, 'Easy', 'CO-1'),
  q(11, 'MCQ', 'Majority carriers in P-type:', 'Holes', ['Electrons', 'Holes', 'Neutrons', 'Protons'], undefined, 'Easy', 'CO-1'),
  q(12, 'MCQ', 'Minority carriers in N-type:', 'Holes', ['Electrons', 'Holes', 'Neutrons', 'Ions'], undefined, 'Easy', 'CO-1'),
  q(13, 'MCQ', 'Temperature coefficient of Semiconductor resistance:', 'Negative', ['Positive', 'Negative', 'Zero', 'Infinite'], undefined, 'Medium', 'CO-1'),
  q(14, 'MCQ', 'Hall effect is used to find:', 'Type of Semiconductor', ['Voltage', 'Current', 'Type of Semiconductor', 'Power'], undefined, 'Medium', 'CO-1'),
  
  // --- CO-2: Diodes & BJT (51-100) ---
  q(51, 'MCQ', 'Knee voltage for Si diode:', '0.7V', ['0.3V', '0.7V', '1V', '0V'], undefined, 'Easy', 'CO-2'),
  q(52, 'MCQ', 'Knee voltage for Ge diode:', '0.3V', ['0.7V', '0.3V', '1.1V', '0.1V'], undefined, 'Easy', 'CO-2'),
  q(53, 'BOOLEAN', 'Zener diode is always used in forward bias.', 'False', undefined, 'Used in reverse breakdown.', 'Easy', 'CO-2'),
  q(54, 'MCQ', 'Capacitance in reverse biased diode is:', 'Transition Capacitance', ['Diffusion', 'Transition Capacitance', 'Storage', 'Load'], undefined, 'Medium', 'CO-2'),
  q(55, 'MCQ', 'Capacitance in forward biased diode is:', 'Diffusion Capacitance', ['Transition', 'Diffusion Capacitance', 'Junction', 'Plate'], undefined, 'Medium', 'CO-2'),
  q(56, 'MCQ', 'PIV of Half Wave Rectifier:', 'Vm', ['2Vm', 'Vm', 'Vm/2', '3Vm'], undefined, 'Medium', 'CO-2'),
  q(57, 'MCQ', 'PIV of Center Tapped Full Wave:', '2Vm', ['Vm', '2Vm', 'Vm/2', '4Vm'], undefined, 'Medium', 'CO-2'),
  q(58, 'MCQ', 'Bridge Rectifier needs __ diodes.', '4', ['1', '2', '4', '6'], undefined, 'Easy', 'CO-2'),
  q(59, 'MCQ', 'Alpha (α) of a transistor is:', 'Ic / Ie', ['Ic / Ib', 'Ic / Ie', 'Ib / Ic', 'Ie / Ic'], undefined, 'Medium', 'CO-2'),
  q(60, 'MCQ', 'Beta (β) of a transistor is:', 'Ic / Ib', ['Ic / Ie', 'Ic / Ib', 'Ib / Ie', 'Ie / Ib'], undefined, 'Medium', 'CO-2'),
  q(61, 'MCQ', 'Relation between α and β:', 'β = α / (1-α)', ['β = 1-α', 'β = α / (1-α)', 'α = β / (1-β)', 'None'], undefined, 'Medium', 'CO-2'),
  q(62, 'MCQ', 'Highest input impedance configuration:', 'CC', ['CB', 'CE', 'CC', 'All equal'], 'Common Collector', 'Medium', 'CO-2'),
  q(63, 'MCQ', 'Most common configuration for amplification:', 'CE', ['CB', 'CC', 'CE', 'None'], 'Good Balance of V and I gain.', 'Easy', 'CO-2'),
  q(64, 'BOOLEAN', 'Emitter is moderately doped.', 'False', undefined, 'Emitter is heavily doped.', 'Medium', 'CO-2'),
  q(65, 'MCQ', 'Base is:', 'Lightly doped', ['Heavily doped', 'Moderately doped', 'Lightly doped', 'Intrinsic'], undefined, 'Medium', 'CO-2'),

  // --- CO-3: FET & MOSFET (101-150) ---
  q(101, 'MCQ', 'Input impedance of FET is:', 'Very High', ['Low', 'Zero', 'Very High', 'Medium'], 'Due to reverse biased gate or oxide.', 'Easy', 'CO-3'),
  q(102, 'MCQ', 'JFET is a __ controlled device.', 'Voltage', ['Current', 'Voltage', 'Power', 'Charge'], undefined, 'Easy', 'CO-3'),
  q(103, 'MCQ', 'BJT is a __ controlled device.', 'Current', ['Voltage', 'Current', 'Resistor', 'Inductor'], undefined, 'Easy', 'CO-3'),
  q(104, 'BOOLEAN', 'MOSFET has an insulating SiO2 layer.', 'True', undefined, undefined, 'Easy', 'CO-3'),
  q(105, 'MCQ', 'CMOS uses:', 'NMOS and PMOS', ['Two NMOS', 'Two PMOS', 'NMOS and PMOS', 'BJT and FET'], 'Complementary pairs.', 'Medium', 'CO-3'),
  q(106, 'MCQ', 'Condition for Saturation in NMOS:', 'Vds >= Vgs - Vt', ['Vds < Vgs - Vt', 'Vds >= Vgs - Vt', 'Vgs < Vt', 'None'], undefined, 'Hard', 'CO-3'),
  q(107, 'MCQ', 'Transconductance unit:', 'Siemens', ['Ohm', 'Volt', 'Siemens', 'Henry'], undefined, 'Medium', 'CO-3'),
  q(108, 'MCQ', 'Pinch-off voltage Vp is where Id becomes:', 'Constant / Saturation', ['Zero', 'Maximum', 'Constant / Saturation', 'Negative'], undefined, 'Hard', 'CO-3'),
  q(109, 'BOOLEAN', 'FET is less noisy than BJT.', 'True', undefined, 'Majority carrier device.', 'Medium', 'CO-3'),
  q(110, 'MCQ', 'FET thermal stability is __ than BJT.', 'Better', ['Worse', 'Better', 'Same', 'None'], undefined, 'Medium', 'CO-3'),

  // --- CO-4 & CO-5: Applications & Fab (151-200) ---
  q(151, 'MCQ', 'LED emits light due to:', 'Recombination', ['Heating', 'Recombination', 'Reflection', 'Refraction'], undefined, 'Easy', 'CO-4'),
  q(152, 'MCQ', 'Color of LED depends on:', 'Bandgap of material', ['Voltage applied', 'Current', 'Bandgap of material', 'Temperature'], undefined, 'Medium', 'CO-4'),
  q(153, 'MCQ', 'Solar cells are made of:', 'Semiconductors', ['Metals', 'Insulators', 'Semiconductors', 'Plastics'], undefined, 'Easy', 'CO-4'),
  q(154, 'MCQ', 'Op-Amp IC number:', '741', ['555', '741', '7805', '8085'], undefined, 'Easy', 'CO-4'),
  q(155, 'MCQ', 'CMRR of ideal Op-Amp:', 'Infinite', ['Zero', '1', '100', 'Infinite'], undefined, 'Medium', 'CO-4'),
  q(156, 'MCQ', 'Virtual ground concept is used in:', 'Op-Amp', ['Diode', 'BJT', 'Op-Amp', 'Rectifier'], undefined, 'Easy', 'CO-4'),
  q(157, 'MCQ', 'Material used for blue LED:', 'GaN', ['Si', 'Ge', 'GaAs', 'GaN'], 'Gallium Nitride', 'Hard', 'CO-4'),
  q(158, 'MCQ', 'Photodiode is operated in:', 'Reverse Bias', ['Forward Bias', 'Reverse Bias', 'Zero Bias', 'Any'], undefined, 'Easy', 'CO-4'),
  q(159, 'MCQ', 'Etching is process of:', 'Removing material', ['Adding material', 'Removing material', 'Heating', 'Cooling'], undefined, 'Easy', 'CO-5'),
  q(160, 'MCQ', 'SiO2 layer is used as:', 'Insulator/Mask', ['Conductor', 'Insulator/Mask', 'Semiconductor', 'Resistor'], undefined, 'Medium', 'CO-5'),
  q(161, 'MCQ', 'Moore Law relates to:', 'Transistor Count', ['Clock Speed', 'Transistor Count', 'Power', 'Cost'], undefined, 'Easy', 'CO-5'),
];