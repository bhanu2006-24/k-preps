import { Resource } from '../../types';

export const deviceNotes: Resource[] = [
  {
    id: 'note-ed-full',
    title: 'Electronic Devices: Master Note',
    type: 'Study Note',
    subjectId: 'electronic-devices',
    description: 'Semiconductors, Diodes, BJT, FET, and Fabrication.',
    markdownContent: `# Electronic Devices: Complete Overview

## 1. Semiconductor Physics
- **Intrinsic**: Pure Si/Ge. $n=p=n_i$.
- **Extrinsic**: Doped. N-type (Pentavalent), P-type (Trivalent).
- **Mass Action Law**: $np = n_i^2$.

## 2. PN Junction
- **Forward Bias**: Diffusion current dominates. Depletion width decreases.
- **Reverse Bias**: Drift (leakage) current. Depletion width increases.
- **Diode Equation**: $I = I_0(e^{V/\\eta V_T} - 1)$.

## 3. Transistors
- **BJT**: Current controlled. $\\beta = I_C / I_B$.
- **FET**: Voltage controlled. High Input Impedance.
- **MOSFET**: Metal-Oxide-Semiconductor. Enhancement & Depletion modes.

## 4. Special Devices
- **LED**: Direct bandgap (GaAs).
- **Solar Cell**: Photovoltaic effect (4th Quadrant).
- **Zener**: Heavily doped, operates in breakdown.
`
  },
  {
    id: 'note-ed-m1',
    title: 'Module 1: Semiconductor Physics',
    type: 'Study Note',
    subjectId: 'electronic-devices',
    moduleId: 'CO-1',
    description: 'Energy bands, Fermi levels, and Carrier transport.',
    markdownContent: `# Module 1: Physics

## Fermi Level
- **Intrinsic**: At center of bandgap.
- **N-type**: Moves closer to Conduction Band ($E_C$).
- **P-type**: Moves closer to Valence Band ($E_V$).

## Drift vs Diffusion
- **Drift**: Movement due to Electric Field. $J = \\sigma E$.
- **Diffusion**: Movement due to concentration gradient.
- **Einstein Relation**: $D_n / \\mu_n = V_T$ (Thermal Voltage).
`
  },
  {
    id: 'note-ed-m2',
    title: 'Module 2: Diodes & Circuits',
    type: 'Study Note',
    subjectId: 'electronic-devices',
    moduleId: 'CO-2',
    description: 'Rectifiers, Clippers, Clampers.',
    markdownContent: `# Module 2: Diode Circuits

## Rectifiers
- **Half Wave**: Efficiency 40.6%. Ripple 1.21.
- **Full Wave**: Efficiency 81.2%. Ripple 0.48.

## Clippers
Used to remove part of a waveform (Limiters).
- Series/Parallel configurations.

## Clampers
Adds a DC shift to the signal. Requires a capacitor.
`
  },
  {
    id: 'note-ed-m3',
    title: 'Module 3: BJT Characteristics',
    type: 'Study Note',
    subjectId: 'electronic-devices',
    moduleId: 'CO-2',
    description: 'CE, CB, CC configurations and biasing.',
    markdownContent: `# Module 3: BJT

## Modes
| E-B Bias | C-B Bias | Mode | Application |
|---|---|---|---|
| Fwd | Rev | Active | Amplifier |
| Fwd | Fwd | Saturation | Switch (ON) |
| Rev | Rev | Cutoff | Switch (OFF) |

## Configurations
- **Common Emitter (CE)**: High Gain, Phase shift 180°.
- **Common Collector (CC)**: Unity Gain, High Input Z (Buffer).
`
  },
  {
    id: 'note-ed-m4',
    title: 'Module 4: MOSFETs',
    type: 'Study Note',
    subjectId: 'electronic-devices',
    moduleId: 'CO-3',
    description: 'Structure, Operation and I-V characteristics.',
    markdownContent: `# Module 4: MOSFET

## Regions of Operation (NMOS)
1. **Cutoff**: $V_{GS} < V_{th}$. $I_D = 0$.
2. **Linear (Triode)**: $V_{DS} < V_{GS} - V_{th}$. Behaves as resistor.
3. **Saturation**: $V_{DS} \\ge V_{GS} - V_{th}$. Constant current (Amplifier region).

## Equation (Saturation)
$I_D = \\frac{1}{2} \\mu_n C_{ox} \\frac{W}{L} (V_{GS} - V_{th})^2$
`
  },
  {
    id: 'note-ed-m5',
    title: 'Module 5: Fabrication',
    type: 'Study Note',
    subjectId: 'electronic-devices',
    moduleId: 'CO-5',
    description: 'Lithography, Etching, and Oxidation.',
    markdownContent: `# Module 5: IC Fabrication

## Key Steps
1. **Oxidation**: Growing $SiO_2$ layer (Insulation).
2. **Photolithography**: Transferring pattern using UV light.
3. **Etching**: Removing unwanted material (Wet/Dry).
4. **Diffusion/Ion Implantation**: Doping the substrate.
5. **Metallization**: Connecting components.

## Moore's Law
Transistor count doubles approximately every 2 years.
`
  }
];