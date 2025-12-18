import { Resource } from '../../types';

export const networkCheatsheets: Resource[] = [
  {
    id: 'cs-nt-formulas',
    title: 'Network Theory Formula Sheet',
    type: 'Cheat Sheet',
    subjectId: 'network-theory',
    moduleId: 'CO-1',
    description: 'Essential formulas for Circuit Analysis and Theorems.',
    markdownContent: `# Network Theory Formulas

## Basic Laws
- **Ohm's Law**: $V = I \\times R$
- **Conductance**: $G = 1/R$ (Siemens)
- **Power**: $P = VI = I^2R = V^2/R$

## Series & Parallel
- **Series Resistors**: $R_{eq} = R_1 + R_2 + ...$
- **Parallel Resistors**: $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2}$
- **Current Divider**: $I_x = I_{total} \\times \\frac{R_{total}}{R_x + R_{total}}$ (for 2 resistors: $I_1 = I \\frac{R_2}{R_1+R_2}$)
- **Voltage Divider**: $V_x = V_{source} \\times \\frac{R_x}{R_{eq}}$

## AC Circuits
- **Inductive Reactance**: $X_L = 2\\pi fL = \\omega L$
- **Capacitive Reactance**: $X_C = \\frac{1}{2\\pi fC} = \\frac{1}{\\omega C}$
- **Impedance**: $Z = R + j(X_L - X_C)$
- **Power Factor**: $\\cos \\phi = \\frac{R}{Z}$

## Resonance
- **Resonant Frequency**: $f_r = \\frac{1}{2\\pi\\sqrt{LC}}$
- **Quality Factor (Series)**: $Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$
- **Bandwidth**: $BW = \\frac{f_r}{Q}$

## Two-Port Networks
- **Z-Parameters**: 
  $V_1 = Z_{11}I_1 + Z_{12}I_2$
  $V_2 = Z_{21}I_1 + Z_{22}I_2$
- **Reciprocity (Z)**: $Z_{12} = Z_{21}$
- **Symmetry (Z)**: $Z_{11} = Z_{22}$
`
  },
  {
    id: 'cs-nt-laplace',
    title: 'Laplace Transform Pairs',
    type: 'Cheat Sheet',
    subjectId: 'network-theory',
    moduleId: 'CO-3',
    description: 'Quick reference for s-domain analysis.',
    markdownContent: `# Laplace Transforms

| Time Domain f(t) | s-Domain F(s) |
|---|---|
| $\\delta(t)$ (Impulse) | 1 |
| $u(t)$ (Step) | $1/s$ |
| $t$ (Ramp) | $1/s^2$ |
| $e^{-at}$ | $\\frac{1}{s+a}$ |
| $\\sin(\\omega t)$ | $\\frac{\\omega}{s^2+\\omega^2}$ |
| $\\cos(\\omega t)$ | $\\frac{s}{s^2+\\omega^2}$ |
| $e^{-at}\\sin(\\omega t)$ | $\\frac{\\omega}{(s+a)^2+\\omega^2}$ |

## Properties
- **Differentiation**: $L[\\frac{df}{dt}] = sF(s) - f(0^-)$
- **Integration**: $L[\\int f(t)dt] = \\frac{F(s)}{s}$
- **Initial Value**: $f(0^+) = \\lim_{s\\to\\infty} sF(s)$
- **Final Value**: $f(\\infty) = \\lim_{s\\to 0} sF(s)$
`
  }
];