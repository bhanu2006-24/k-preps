
import { Subject } from '../../types';

export const digitalElectronics: Subject = {
  id: 'digital-system-design',
  code: '3EC4-04',
  name: 'Digital System Design',
  description: 'Analysis and design of digital systems, including combinational and sequential logic, semiconductor memories, and interfacing.',
  credits: 3,
  objectives: [
    { id: 'CO-1', description: 'Explain number systems and demonstrate their applications in digital electronics.' },
    { id: 'CO-2', description: 'Simplify Boolean functions using Karnaugh Maps for optimized circuit design.' },
    { id: 'CO-3', description: 'Design combinational and sequential circuits considering performance metrics.' },
    { id: 'CO-4', description: 'Analyze the interfacing of digital and analog components using ADCs and DACs.' },
    { id: 'CO-5', description: 'Design semiconductor memories and implement digital systems using PLDs and FPGAs.' },
  ]
};
