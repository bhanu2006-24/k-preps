import { Resource } from '../../types';

export const networkNotes: Resource[] = [
  {
    id: 'note-nt-full',
    title: 'Network Theory: Complete Revision',
    type: 'Study Note',
    subjectId: 'network-theory',
    description: 'Master guide covering KCL/KVL to Two-Port Networks.',
    markdownContent: `# Network Theory: Complete Revision

## 1. Basic Concepts
- **KCL**: Sum of currents entering a node is zero. $\\sum I_{in} = 0$.
- **KVL**: Sum of voltages in a closed loop is zero. $\\sum V = 0$.
- **Power**: $P = VI = I^2R = V^2/R$.

## 2. Network Theorems
- **Thevenin's**: Any linear bilateral network can be replaced by $V_{th}$ in series with $R_{th}$.
- **Norton's**: Replaced by $I_{sc}$ in parallel with $R_{th}$.
- **Superposition**: In linear networks, response is sum of responses from individual sources.

## 3. Transient Analysis
- **Inductor**: Resists change in current. $V = L(di/dt)$. Acts as Open Circuit at $t=0$ (if uncharged).
- **Capacitor**: Resists change in voltage. $I = C(dv/dt)$. Acts as Short Circuit at $t=0$ (if uncharged).
- **Time Constant**: $\\tau = RC$ or $\\tau = L/R$.

## 4. Two Port Networks
- **Z-Parameters**: $V_1 = Z_{11}I_1 + Z_{12}I_2$
- **Y-Parameters**: $I_1 = Y_{11}V_1 + Y_{12}V_2$
- **Reciprocity Condition**: $Z_{12} = Z_{21}$ or $Y_{12} = Y_{21}$.

## 5. Resonance
- **Series Resonance**: $X_L = X_C$, $Z = R$ (Minimum). Current is Maximum.
- **Parallel Resonance**: Impedance is Maximum. Current is Minimum.
`
  },
  {
    id: 'note-nt-m1',
    title: 'Module 1: Circuit Laws & Methods',
    type: 'Study Note',
    subjectId: 'network-theory',
    moduleId: 'CO-1',
    description: 'Nodal Analysis, Mesh Analysis, and Independent/Dependent Sources.',
    markdownContent: `# Module 1: Circuit Fundamentals

## Nodal Analysis
Based on **KCL**. 
1. Identify principal nodes.
2. Select a reference node (Ground).
3. Write KCL equations for non-reference nodes.

## Mesh Analysis
Based on **KVL**.
1. Identify meshes (loops without inner loops).
2. Assign mesh currents.
3. Write KVL equations.
*Note: Only applicable to planar circuits.*

## Source Transformation
- Voltage Source ($V_s$ in series with $R$) $\\leftrightarrow$ Current Source ($I_s = V_s/R$ in parallel with $R$).
`
  },
  {
    id: 'note-nt-m2',
    title: 'Module 2: Network Theorems',
    type: 'Study Note',
    subjectId: 'network-theory',
    moduleId: 'CO-1',
    description: 'Deep dive into Thevenin, Norton, MPT, and Reciprocity.',
    markdownContent: `# Module 2: Theorems

## Maximum Power Transfer Theorem
- **DC Circuits**: Max power is transferred when $R_L = R_{th}$.
- **AC Circuits**: Max power when $Z_L = Z_{th}^*$ (Complex Conjugate).
- **Efficiency**: At MPT, efficiency is 50%.

## Millman's Theorem
Useful for parallel voltage sources.
$V_{eq} = \\frac{\\sum (V_n / R_n)}{\\sum (1 / R_n)}$
`
  },
  {
    id: 'note-nt-m3',
    title: 'Module 3: Transient Analysis',
    type: 'Study Note',
    subjectId: 'network-theory',
    moduleId: 'CO-3',
    description: 'First and Second order circuits, Laplace Transform applications.',
    markdownContent: `# Module 3: Transients

## Standard Signals
1. **Unit Step u(t)**: 1 for $t > 0$. Laplace: $1/s$.
2. **Impulse $\\delta(t)$**: Area is 1. Laplace: $1$.
3. **Ramp r(t)**: t for $t > 0$. Laplace: $1/s^2$.

## Initial Conditions
- **Inductor**: Current cannot change instantaneously ($i(0^-) = i(0^+)$).
- **Capacitor**: Voltage cannot change instantaneously ($v(0^-) = v(0^+)$).

## Final Value Theorem
$\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} sF(s)$ (if poles are in LHP).
`
  },
  {
    id: 'note-nt-m4',
    title: 'Module 4: Two-Port Networks',
    type: 'Study Note',
    subjectId: 'network-theory',
    moduleId: 'CO-4',
    description: 'Z, Y, ABCD, and h-parameters relationships.',
    markdownContent: `# Module 4: Two-Port Networks

## ABCD Parameters (Transmission)
Used for cascading networks.
$V_1 = A V_2 - B I_2$
$I_1 = C V_2 - D I_2$
- **Symmetry**: $A = D$
- **Reciprocity**: $AD - BC = 1$

## Interconnection
- **Series**: Add Z-matrices.
- **Parallel**: Add Y-matrices.
- **Cascade**: Multiply Transmission matrices.
`
  },
  {
    id: 'note-nt-m5',
    title: 'Module 5: Resonance & Filters',
    type: 'Study Note',
    subjectId: 'network-theory',
    moduleId: 'CO-5',
    description: 'Bandwidth, Q-factor, and Filter Design.',
    markdownContent: `# Module 5: Resonance

## Quality Factor (Q)
Measure of selectivity.
$Q = \\frac{\\text{Stored Energy}}{\\text{Dissipated Energy}}$
- Series RLC: $Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$
- Bandwidth $BW = f_r / Q$

## Filters
- **Low Pass**: Passes $0$ to $f_c$.
- **High Pass**: Passes $f_c$ to $\\infty$.
- **Band Pass**: Passes $f_1$ to $f_2$.
`
  },
];