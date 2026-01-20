import governanceEvents from './governance_events.json' assert { type: 'json' };
import { handleGovernanceEvent } from '../core/eru.js';

export function processGovernanceEvents() {
  governanceEvents.forEach(event => {
    handleGovernanceEvent(event);
  });
}
