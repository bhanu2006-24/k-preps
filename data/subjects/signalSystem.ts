import { Subject } from '../../types';

export const signalSystem: Subject = {
  id: 'signal-system',
  code: '3EC4-05',
  name: 'Signals & Systems',
  description: 'Analysis of continuous and discrete-time signals and systems.',
  credits: 3,
  objectives: [
    { id: 'CO-1', description: 'Classify signals and examine their properties and system behaviors.' },
    { id: 'CO-2', description: 'Interpret the behavior of linear shift-invariant systems.' },
    { id: 'CO-3', description: 'Analyze continuous and discrete-time systems using various transform techniques.' },
    { id: 'CO-4', description: 'Construct state-space models and apply sampling theorems for signal reconstruction.' },
  ]
};
