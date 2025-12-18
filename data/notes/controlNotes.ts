
import { Resource } from '../../types';

export const controlNotes: Resource[] = [
  {
    id: 'note-cs-m1',
    title: 'Control Systems: Mathematical Modeling',
    type: 'Study Note',
    subjectId: 'control-systems',
    moduleId: 'CO-1',
    description: 'Transfer functions, block diagrams, and signal flow graphs.',
    markdownContent: `# Mathematical Modeling

## Transfer Function
The ratio of the Laplace transform of output to input with zero initial conditions.
$$G(s) = \\frac{C(s)}{R(s)}$$

## Block Diagram Reduction
- Blocks in series: $G_1 \\cdot G_2$
- Blocks in parallel: $G_1 + G_2$
- Feedback loop: $\\frac{G}{1 \\pm GH}$

## Mason's Gain Formula
Used for Signal Flow Graphs (SFG).
$$T = \\frac{1}{\\Delta} \\sum P_k \\Delta_k$$
`
  },
  {
    id: 'note-cs-m2',
    title: 'Stability Analysis',
    type: 'Study Note',
    subjectId: 'control-systems',
    moduleId: 'CO-3',
    description: 'Routh-Hurwitz and Root Locus techniques.',
    markdownContent: `# Stability Analysis

## Routh-Hurwitz Criterion
A method to determine if a polynomial has roots in the RHP without solving it.
- **Necessary condition**: All coefficients must be positive and non-zero.
- **Sufficient condition**: No sign changes in the first column of the Routh array.

## Root Locus
Graphical representation of the paths of the closed-loop poles as a system parameter (usually gain K) varies from 0 to infinity.
- **Centroid**: $\\sigma = \\frac{\\sum \\text{Real Poles} - \\sum \\text{Real Zeros}}{n - m}$
- **Asymptote Angle**: $\\theta = \\frac{(2k+1)180^\\circ}{n - m}$
`
  }
];
