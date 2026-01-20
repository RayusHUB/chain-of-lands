# Solana Event Mapping — Chain of Lands

## Purpose

This document describes how Chain of Lands maps real Solana on-chain events
to world state changes, governance outcomes, and narrative reactions.

The goal is to ensure that blockchain interactions are:
- Deterministic
- Interpretable
- Narrative-aware
- Canon-consistent

Blockchain events are treated as **sources of truth**, not sources of logic.

---

## Design Principles

1. Events represent **outcomes**, not intentions  
2. On-chain data must be interpretable off-chain  
3. Narrative systems never read raw blockchain state directly  
4. All world changes are driven by indexed events  

Solana is used as an immutable ledger of decisions and actions.
Meaning is assigned off-chain.

---

## Event Flow Overview

Solana Program
↓ emits
Program Event (log)
↓ indexed by
Event Indexer
↓ transformed into
Canonical World Event
↓ consumed by
Eru AI + World Systems


---

## Event Categories

Chain of Lands recognizes four primary categories of Solana events.

### 1. Governance Events
Events emitted by governance or DAO programs.

**Purpose:**
- Capture collective decisions
- Trigger irreversible world changes

**Example (Solana log):**

event GovernanceDecision {
decision_id: string,
topic: string,
outcome: string,
region: string
}


**Mapped World Event:**
```json
{
  "type": "GOVERNANCE_DECISION",
  "decisionId": "GD-001",
  "topic": "Faction Balance",
  "decision": "WEAKEN_ELVEN_INFLUENCE",
  "region": "Elven Realms"
}


**Mapped World Event:**
```json
{
  "type": "GOVERNANCE_DECISION",
  "decisionId": "GD-001",
  "topic": "Faction Balance",
  "decision": "WEAKEN_ELVEN_INFLUENCE",
  "region": "Elven Realms"
}

event FactionDominanceUpdated {
  region: string,
  old_value: u8,
  new_value: u8
}

Mapped World Event:

{
  "type": "FACTION_DOMINANCE_CHANGED",
  "region": "Elven Realms",
  "oldValue": 62,
  "newValue": 47
}

3. Conflict Events

Events representing battles, raids, or major confrontations.

Purpose:

Introduce irreversible narrative scars

Trigger regional instability

Example (Solana log):

event BattleOccurred {
  region: string,
  severity: u8
}

Mapped World Event:

{
  "type": "BATTLE_OCCURRED",
  "region": "Dark Lands",
  "severity": "high"
}


4. Economic Signal Events

Events related to token usage or systemic participation.

Purpose:

Signal engagement levels

Influence long-term world trends

Example (Solana log):

event ParticipationSpike {
  region: string,
  delta: i64
}

Mapped World Event:

{
  "type": "PARTICIPATION_SIGNAL",
  "region": "Human Kingdoms",
  "delta": 1800
}

Indexing Strategy

Chain of Lands uses an off-chain indexer to process Solana events.

Indexer Responsibilities

Listen to specific program IDs

Parse structured logs

Normalize event formats

Enrich events with context

Persist events for narrative consumption

Indexers never apply game logic.
They translate chain data into canonical events only.

Canonical Event Model

All indexed events are normalized into a single internal format:

{
  "type": "EVENT_TYPE",
  "region": "Region Name",
  "timestamp": 1710000000,
  "source": "solana",
  "metadata": {}
}

This model ensures:

Chain-agnostic processing

Future multi-chain compatibility

Narrative consistency

Narrative Consumption (Eru AI)

Eru AI consumes only canonical events.

It does not:

Read balances

Inspect wallets

Interpret prices

It does:

Observe outcomes

Record memory

Adjust narrative tone

Preserve history

This separation prevents narrative manipulation
through low-level chain activity.

Security Considerations

Only whitelisted programs are indexed

Event schemas are versioned

Invalid or malformed events are discarded

Duplicate events are ignored

No single event can override canonical rules.

Future Expansion

This model allows future support for:

Multiple Solana programs

DAO frameworks (Realms, custom)

Cross-chain mirroring

L2 or rollup-style event aggregation

The narrative layer remains unchanged.


