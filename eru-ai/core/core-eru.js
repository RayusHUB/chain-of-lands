import { validateCanon } from './rules.js';
import { recordMemory } from './memory.js';

export function generateNarrative(context) {
  validateCanon(context);
  recordMemory(context);

  return {
    title: context.region,
    text: `Eru observes the lands of ${context.region}. The balance shifts.`
  };
}
