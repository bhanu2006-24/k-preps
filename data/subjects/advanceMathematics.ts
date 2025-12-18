import { Subject } from '../../types';

export const advanceMathematics: Subject = {
  id: 'advance-mathematics',
  code: '3EC2-01',
  name: 'Advanced Engineering Mathematics-I',
  description: 'Higher engineering mathematics including numerical methods, transforms, and equations.',
  credits: 3,
  objectives: [
    { id: 'CO-1', description: 'Apply numerical methods for interpolation, numerical differentiation, integration, and solution of ordinary differential equations.' },
    { id: 'CO-2', description: 'Solve ordinary differential equations using Laplace transforms.' },
    { id: 'CO-3', description: 'Analyze one-dimensional heat and wave equations using Fourier transforms.' },
    { id: 'CO-4', description: 'Implement Z-transform techniques for solving difference equations.' },
  ]
};
