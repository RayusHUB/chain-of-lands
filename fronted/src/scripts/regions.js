let REGIONS = [];

fetch('./data/regions.json')
  .then(res => res.json())
  .then(data => REGIONS = data);
