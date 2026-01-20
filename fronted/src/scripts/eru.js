export async function getEruNarrative(region) {
  const response = await fetch('http://localhost:3001/narrate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      region: region.name,
      faction: region.faction,
      season: 'Season One'
    })
  });

  return response.json();
}
