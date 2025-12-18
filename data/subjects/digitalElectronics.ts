
import { Subject } from '../../types';

export const digitalElectronics: Subject = {
  id: 'digital-electronics',
  code: '3EC4-08',
  name: 'Digital Electronics',
  description: 'Design and analysis of digital circuits, logic gates, and memory elements.',
  credits: 3,
  objectives: [
    { id: 'CO-1', description: 'Understand Number Systems and Boolean Algebra simplification.' },
    { id: 'CO-2', description: 'Design combinational circuits like Adders, Mux, and Decoders.' },
    { id: 'CO-3', description: 'Analyze sequential circuits, Flip-Flops, and Counters.' },
    { id: 'CO-4', description: 'Design Finite State Machines (FSM) and ASM charts.' },
    { id: 'CO-5', description: 'Understand Logic Families (TTL, CMOS) and Memory devices.' },
  ]
};
