/*let chord = 0
const chords = [0, 2, 4, 5, 7, 9, 11, 12]
let lastNote = -1
const toPause = []
let pause = false
let note = 1

window.setInterval(() => {
  if (lastNote >= 0) {
    if (note === 1) {
      chord = chords[Math.floor(Math.random() * 8)]
      lastNote = chord
    }
    const audio = new Audio(`audio/${lastNote}.wav`)
    audio.play()
    if (note === 1) {
      while (toPause.length > 1) {
        toPause.pop().pause()
      }
    }
    toPause.push(audio)
    lastNote = -1
  }
  note = note >= 16 ? 1 : note + 1
}, 200)

document.getElementById("text").addEventListener("input", (event) => {
  const charCode = event.data.charCodeAt(0)
  if (charCode % 4 === 0) {
    lastNote = chord
  } else if ((charCode + 1) % 4 === 0) {
    lastNote = chord + 4
  } else if ((charCode + 2) % 4 === 0) {
    lastNote = chord + 7
  } else if ((charCode + 3) % 4 === 0) {
    lastNote = chord + 12
  }
})*/

const letters = ["ma", "ry", " had", " a", " li", "ttle", " lamb", " li", "ttle", " lamb", " li", "ttle", " lamb", " ma", "ry", " had", " a", " li", "ttle", " lamb", " its", " fleece", " was", " white", " as", " snow"]
const notes = [6, 4, 2, 4, 6, 6, 6, 4, 4, 4, 6, 9, 9, 6, 4, 2, 4, 6, 6, 6, 6, 4, 4, 6, 4, 2]
let i = 0;
let pos = 0;

document.getElementById("label").textContent = letters.join("");

document.getElementById("text").addEventListener("input", (event) => {
  if (event.target.value.slice(pos).toLowerCase() === letters[i]) {
    pos = event.target.value.length;
    const audio = new Audio(`audio/${notes[i]}.wav`)
    audio.play()
    i++;
    if (i >= letters.length) {
      i = 0;
      event.target.value = "";
      pos = 0;
    }
  } else {
    if (event.target.value[event.target.value.length - 1].toLowerCase() !== letters[i][event.target.value.length - pos - 1]) {
      const audio = new Audio(`audio/${Math.floor(Math.random() * 25)}.wav`)
      audio.play()
    }
  }
})
