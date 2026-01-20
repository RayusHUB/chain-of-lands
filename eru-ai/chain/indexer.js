import events from './events.json' assert { type: 'json' };
import { handleChainEvent } from '../core/eru.js';

export function processChainEvents() {
  events.forEach(event => {
    handleChainEvent(event);
  });
}
