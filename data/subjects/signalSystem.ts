import { Subject } from '../../types';

export const signalSystem: Subject = {
  id: 'signal-system',
  code: '3EC4-05',
  name: 'Signal & Systems',
  description: 'Analysis of signals and systems in time and frequency domains.',
  credits: 4,
  objectives: [
    { id: 'CO-1', description: 'Introduction to Signals and Systems' },
    { id: 'CO-2', description: 'Linear Time-Invariant Systems' },
    { id: 'CO-3', description: 'Fourier Series and Transform' },
    { id: 'CO-4', description: 'Laplace Transform' },
    { id: 'CO-5', description: 'Z-Transform and Sampling' },
  ]
};
