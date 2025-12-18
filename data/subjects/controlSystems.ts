
import { Subject } from '../../types';

export const controlSystems: Subject = {
  id: 'control-systems',
  code: '4EC4-01',
  name: 'Control Systems',
  description: 'Analysis and design of feedback control systems, stability, and state-space modeling.',
  credits: 4,
  objectives: [
    { id: 'CO-1', description: 'Model mechanical and electrical systems using transfer functions.' },
    { id: 'CO-2', description: 'Analyze time-domain specifications and steady-state errors.' },
    { id: 'CO-3', description: 'Determine system stability using Routh-Hurwitz and Root Locus.' },
    { id: 'CO-4', description: 'Perform frequency response analysis using Bode and Nyquist plots.' },
    { id: 'CO-5', description: 'Apply state-variable methods for modern control analysis.' },
  ]
};
