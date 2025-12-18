import { Resource } from '../../types';

export const deviceCheatsheets: Resource[] = [
  {
    id: 'cs-ed-constants',
    title: 'Semiconductor Constants & Equations',
    type: 'Cheat Sheet',
    subjectId: 'electronic-devices',
    moduleId: 'CO-1',
    description: 'Physical constants and fundamental semiconductor equations.',
    markdownContent: `# Constants & Physics

## Constants
- **Charge of electron (q)**: $1.6 \\times 10^{-19} C$
- **Boltzmann Constant (k)**: $1.38 \\times 10^{-23} J/K$
- **Thermal Voltage ($V_T$)**: $\\frac{kT}{q} \\approx 26mV$ at 300K
- **Intrinsic Concentration ($n_i$)**: $1.5 \\times 10^{10} cm^{-3}$ for Si

## Equations
- **Mass Action Law**: $n \\times p = n_i^2$
- **Conductivity**: $\\sigma = q(n\\mu_n + p\\mu_p)$
- **Drift Velocity**: $v_d = \\mu E$
- **Einstein Relation**: $\\frac{D}{\\mu} = V_T$

## PN Junction
- **Built-in Potential**: $V_{bi} = V_T \\ln(\\frac{N_A N_D}{n_i^2})$
- **Diode Current**: $I = I_S(e^{V_D/\\eta V_T} - 1)$
`
  },
  {
    id: 'cs-ed-transistor',
    title: 'Transistor Quick Reference',
    type: 'Cheat Sheet',
    subjectId: 'electronic-devices',
    moduleId: 'CO-2',
    description: 'BJT and FET current equations and regions.',
    markdownContent: `# Transistor Cheat Sheet

## BJT Equations
- **Currents**: $I_E = I_B + I_C$
- **Beta**: $\\beta = \\frac{I_C}{I_B}$
- **Alpha**: $\\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{1+\\beta}$
- **Early Effect**: $I_C = I_S e^{V_{BE}/V_T}(1 + \\frac{V_{CE}}{V_A})$

## MOSFET Equations (NMOS)
- **Cutoff**: $V_{GS} < V_{th} \\implies I_D = 0$
- **Linear Region**: $V_{DS} < V_{GS} - V_{th}$
  $I_D = \\mu_n C_{ox} \\frac{W}{L} [(V_{GS}-V_{th})V_{DS} - \\frac{V_{DS}^2}{2}]$
- **Saturation Region**: $V_{DS} \\ge V_{GS} - V_{th}$
  $I_D = \\frac{1}{2}\\mu_n C_{ox} \\frac{W}{L} (V_{GS}-V_{th})^2$

## Comparison
| Feature | BJT | MOSFET |
|---|---|---|
| Control | Current | Voltage |
| Impedance | Low | Very High |
| Speed | Fast | Fast (Scaling) |
| Noise | Higher | Lower |
`
  }
];