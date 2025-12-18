import { Subject } from '../../types';

export const electronicDevices: Subject = {
  id: 'electronic-devices',
  code: '3EC4-07',
  name: 'Electronics Devices',
  description: 'Understanding semiconductor physics and device characteristics.',
  credits: 3,
  objectives: [
    { id: 'CO-1', description: 'Explain semiconductor physics of intrinsic and extrinsic materials.' },
    { id: 'CO-2', description: 'Describe the current-voltage characteristics of BJT and MOSFET.' },
    { id: 'CO-3', description: 'Apply mathematical models of semiconductor devices in circuit analysis.' },
    { id: 'CO-4', description: 'Analyze the characteristics and applications of electronic devices like amplifiers, LEDs, solar cells.' },
    { id: 'CO-5', description: 'Demonstrate understanding of IC fabrication through theoretical and experimental approaches.' },
  ]
};