const memory = [];

export function recordMemory(entry) {
  memory.push({
    ...entry,
    recordedAt: Date.now()
  });
}

export function getChainMemory(region) {
  return memory.filter(m => m.region === region);
}
export function getGovernanceHistory(region) {
  return memory.filter(
    m => m.region === region && m.governanceDecision
  );
}
