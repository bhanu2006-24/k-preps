// Simple utility to convert common engineering units

type UnitType = 'current' | 'voltage' | 'resistance' | 'frequency';

interface Conversion {
  from: string;
  to: string;
  factor: number;
  type: UnitType;
}

const conversions: Conversion[] = [
  // Current
  { from: 'ma', to: 'a', factor: 0.001, type: 'current' },
  { from: 'ua', to: 'a', factor: 0.000001, type: 'current' },
  { from: 'ka', to: 'a', factor: 1000, type: 'current' },
  { from: 'a', to: 'ma', factor: 1000, type: 'current' },
  
  // Voltage
  { from: 'mv', to: 'v', factor: 0.001, type: 'voltage' },
  { from: 'kv', to: 'v', factor: 1000, type: 'voltage' },
  
  // Resistance
  { from: 'kohm', to: 'ohm', factor: 1000, type: 'resistance' },
  { from: 'mohm', to: 'ohm', factor: 1000000, type: 'resistance' },
  
  // Frequency
  { from: 'khz', to: 'hz', factor: 1000, type: 'frequency' },
  { from: 'mhz', to: 'hz', factor: 1000000, type: 'frequency' },
  { from: 'ghz', to: 'hz', factor: 1000000000, type: 'frequency' },
];

export const tryConvertUnits = (query: string): string | null => {
  const lower = query.toLowerCase();
  const match = lower.match(/convert\s+(\d+(?:\.\d+)?)\s*([a-z]+)\s+to\s+([a-z]+)/);
  
  if (!match) return null;
  
  const value = parseFloat(match[1]);
  const fromUnit = match[2];
  const toUnit = match[3];
  
  const conv = conversions.find(c => c.from === fromUnit && c.to === toUnit);
  
  if (conv) {
    const result = value * conv.factor;
    return `${value} ${fromUnit} = ${result} ${toUnit}`;
  }
  
  // Check for reverse or standard SI steps via base unit logic (simplified here to direct lookups for now)
  // For a robust system, we would normalize to base and then to target.
  
  return null;
};