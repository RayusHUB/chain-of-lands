import { recordMemory } from './memory.js';

export function handleChainEvent(event) {
  recordMemory({
    region: event.region,
    season: 'Season One',
    chainEvent: event.type,
    metadata: event
  });
}

export function generateNarrative(context) {
  let chainImpact = '';

  if (context.chainEvent === 'FACTION_DOMINANCE_CHANGED') {
    chainImpact = `
The balance of power has shifted.
What once seemed stable now weakens.
    `;
  }

  if (context.chainEvent === 'BATTLE_OCCURRED') {
    chainImpact = `
Conflict has left scars upon the land.
Victory is remembered longer than peace.
    `;
  }

  return {
    title: context.region,
    text: `
Eru observes the chain itself speaking.

${chainImpact}

The land does not forget what is written in blocks.
    `.trim()
import { recordMemory } from './memory.js';

export function handleGovernanceEvent(event) {
  recordMemory({
    region: event.region,
    season: 'Season One',
    governanceDecision: event.decision,
    metadata: event
  });
}
