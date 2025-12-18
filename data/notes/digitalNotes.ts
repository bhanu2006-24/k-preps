
import { Resource } from '../../types';

export const digitalNotes: Resource[] = [
  {
    id: 'note-de-m1',
    title: 'Digital Logic: Boolean & K-Maps',
    type: 'Study Note',
    subjectId: 'digital-electronics',
    moduleId: 'CO-1',
    description: 'Simplification techniques using Boolean laws and Karnaugh Maps.',
    markdownContent: `# Digital Logic Fundamentals

## Logic Gates
- **AND**: $Y = A \\cdot B$
- **OR**: $Y = A + B$
- **NOT**: $Y = \\bar{A}$
- **NAND/NOR**: Universal gates.

## Boolean Laws
- **De Morgan's**: $\\overline{A+B} = \\bar{A}\\bar{B}$ and $\\overline{AB} = \\bar{A} + \\bar{B}$
- **Distributive**: $A(B+C) = AB + AC$

## K-Maps
A graphical method to simplify Boolean expressions.
- 2-variable: 4 cells
- 3-variable: 8 cells
- 4-variable: 16 cells (Gray code ordering is essential!)
`
  },
  {
    id: 'note-de-m3',
    title: 'Sequential Circuits: Flip-Flops',
    type: 'Study Note',
    subjectId: 'digital-electronics',
    moduleId: 'CO-3',
    description: 'Detailed study of Latches and Flip-Flops.',
    markdownContent: `# Sequential Circuits

## Flip-Flops
Memory elements that store 1 bit of data.
- **SR Flip-Flop**: Set-Reset. Invalid state when $S=1, R=1$.
- **JK Flip-Flop**: Toggles when $J=1, K=1$ (Race around condition solved by Master-Slave).
- **D Flip-Flop**: Delay. Output follows input $D$ at clock edge.
- **T Flip-Flop**: Toggle. $Q_{next} = \\bar{Q}$ if $T=1$.

## Counters
- **Asynchronous (Ripple)**: Clock of one FF is output of previous.
- **Synchronous**: All FFs share the same clock.
`
  }
];
