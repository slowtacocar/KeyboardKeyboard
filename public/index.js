let chord = 0
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
}, 120)

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
})