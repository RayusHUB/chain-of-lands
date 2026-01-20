import { getEruNarrative } from './eru.js';

const container = document.getElementById('map-container');

function createRegion(region) {
  const el = document.createElement('div');
  el.className = 'region';
  el.style.left = region.x + '%';
  el.style.top = region.y + '%';
  el.style.width = region.radius * 2 + 'px';
  el.style.height = region.radius * 2 + 'px';

  el.onclick = async () => {
    const narrative = await getEruNarrative(region);
    showNarrative(narrative);
  };

  container.appendChild(el);
}

function showNarrative(narrative) {
  const panel = document.getElementById('eru-panel');
  panel.querySelector('h2').innerText = narrative.title;
  panel.querySelector('p').innerText = narrative.text;
  panel.classList.add('open');
}

setTimeout(() => {
  REGIONS.forEach(createRegion);
}, 300);
