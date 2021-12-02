let root = 0;
const intervals = [2, 2, 1, 2, 2, 2, 1];
const roots = [0, 2, 4, 5, 7, 9, 11];
let note = -1;
const toPause = [];
let beat = 1;

for (let i = 0; i < 25; i++) {
  const audio = new Audio(`audio/${i}.wav`);
  audio.load();
}

window.setInterval(() => {
  if (note >= 0) {
    if (beat === 1) {
      root = Math.floor(Math.random() * 7);
      note = roots[root];
    }
    const audio = new Audio(`audio/${note}.wav`);
    audio.play();
    if (beat === 1) {
      while (toPause.length > 1) {
        toPause.pop().pause();
      }
    }
    toPause.push(audio);
    note = -1;
  }
  beat = beat >= 16 ? 1 : beat + 1;
}, 200);

document.getElementById("text").addEventListener("input", (event) => {
  const charCode = event.data.charCodeAt(0);
  note = roots[root];
  for (let i = 0; i < charCode % 7; i++) {
    note += intervals[(root + i) % 7];
  }
});
