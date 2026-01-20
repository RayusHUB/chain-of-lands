{
  "Elves": {
    "allowedTones": ["reflective", "concerned"],
    "forbiddenConcepts": ["greed", "reckless_expansion"]
  },
  "Dark": {
    "allowedTones": ["dominant", "threatening"],
    "forbiddenConcepts": ["mercy"]
  }
}
import rules from '../lore/rules.json';

function validateTone(faction, tone) {
  return rules[faction]?.allowedTones.includes(tone);
}
if (!validateTone(context.faction, tone)) {
  tone = rules[context.faction].allowedTones[0];
}
