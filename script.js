const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

const keys = document.querySelectorAll('.key')
const blackKeys = document.querySelectorAll('.key.black')
const whiteKeys = document.querySelectorAll('.key.white')

keys.forEach(key => {
  key.addEventListener('click', () => playNoteAndDisplay(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNoteAndDisplay(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNoteAndDisplay(blackKeys[blackKeyIndex])
})

function playNoteAndDisplay(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  const currentNoteDisplay = document.getElementById('current-note')

  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  currentNoteDisplay.textContent = key.dataset.note

  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
    currentNoteDisplay.textContent = ''
  })
}
