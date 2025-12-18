import { Subject } from '../../types';

export const networkTheory: Subject = {
  id: 'network-theory',
  code: '3EC4-06',
  name: 'Network Theory',
  description: 'Study of circuit analysis, theorems, and transient responses.',
  credits: 4,
  objectives: [
    { id: 'CO-1', description: 'Apply basic circuit laws and theorems for network simplification.' },
    { id: 'CO-2', description: 'Utilize frequency-domain techniques in network analysis.' },
    { id: 'CO-3', description: 'Perform steady-state and transient analysis using Laplace transforms.' },
    { id: 'CO-4', description: 'Analyze transient responses and compute two-port network parameters.' },
    { id: 'CO-5', description: 'Examine resonance conditions and design passive filters.' },
  ]
};