import { Subject } from '../../types';

export const advanceMathematics: Subject = {
  id: 'advance-mathematics',
  code: '3EC4-01',
  name: 'Advance Mathematics',
  description: 'Higher engineering mathematics including complex variables and transforms.',
  credits: 4,
  objectives: [
    { id: 'CO-1', description: ' Numerical Methods 1' },
    { id: 'CO-2', description: 'Numerical Methods 2' },
    { id: 'CO-3', description: 'Complex Analysis 1' },
    { id: 'CO-4', description: 'Complex Analysis 2' },
    { id: 'CO-5', description: 'Random Variables' },
  ]
};
