// Entity filter: one chip per creator, built from each card's "Created by"
// link so new entities need no changes here. Chips are mutually exclusive;
// clicking the active chip or the clear chip removes the filter.
const chipGroup = document.getElementById('creatorChips');
const clearChip = document.getElementById('clearFilters');
const entityCols = [...document.querySelectorAll('#entityGrid > .col')];

const creatorOf = (col) => col.querySelector('a[href^="#creator-"]')?.getAttribute('href');

const creators = new Map();
for (const col of entityCols) {
  const link = col.querySelector('a[href^="#creator-"]');
  if (link) creators.set(link.getAttribute('href'), link.textContent.trim());
}

let selected = null;

for (const [value, name] of [...creators].sort((a, b) => a[1].localeCompare(b[1]))) {
  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'chip';
  chip.textContent = name;
  chip.dataset.creator = value;
  chip.setAttribute('aria-pressed', 'false');
  clearChip.before(chip);
}

chipGroup.addEventListener('click', (event) => {
  const chip = event.target.closest('.chip');
  if (!chip) return;

  if (chip === clearChip) {
    selected = null;
  } else {
    selected = selected === chip.dataset.creator ? null : chip.dataset.creator;
  }

  for (const c of chipGroup.querySelectorAll('.chip[data-creator]')) {
    const on = c.dataset.creator === selected;
    c.classList.toggle('active', on);
    c.setAttribute('aria-pressed', String(on));
  }
  for (const col of entityCols) {
    col.hidden = selected !== null && creatorOf(col) !== selected;
  }
});
