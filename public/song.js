const letters = ["ma", "ry", " had", " a", " li", "ttle", " lamb", " li", "ttle", " lamb", " li", "ttle", " lamb", " ma", "ry", " had", " a", " li", "ttle", " lamb", " its", " fleece", " was", " white", " as", " snow"]
const notes = [6, 4, 2, 4, 6, 6, 6, 4, 4, 4, 6, 9, 9, 6, 4, 2, 4, 6, 6, 6, 6, 4, 4, 6, 4, 2]
const audios = []
let i = 0;
let pos = 0;

for (let i = 0; i < 25; i++) {
  const audio = new Audio(`audio/${i}.aac`)
  audios.push(audio)
  audio.load()
}

document.getElementById("label").textContent = letters.join("");

document.getElementById("text").addEventListener("input", (event) => {
  if (event.target.value.slice(pos).toLowerCase() === letters[i]) {
    pos = event.target.value.length;
    audios[notes[i]].currentTime = 0
    audios[notes[i]].play()
    i++;
    if (i >= letters.length) {
      i = 0;
      event.target.value = "";
      pos = 0;
    }
  } else {
    while (event.target.value.length < pos) {
      i--;
      pos = letters.slice(0, i).join("").length
    }
    if (event.target.value[event.target.value.length - 1].toLowerCase() !== letters[i][event.target.value.length - pos - 1]) {
      const audio = audios[Math.floor(Math.random() * 25)]
      audio.currentTime = 0;
      audio.play()
    }
  }
})
