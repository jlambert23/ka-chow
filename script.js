const alphabets = {
  letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
};

let alphabet = alphabets.numbers;
let answer = '0';

function random(max) {
  return Math.floor(Math.random() * max);
}

function updateAnswer() {
  do {
    var r = alphabet[random(alphabet.length)];
  } while (r === answer);
  answer = r || '';
  document.getElementById('answer').innerHTML = answer || '^^';
}

function toggleAlphabet(el) {
  el.classList.toggle('active');

  const lettersActive = document
    .getElementById('letters')
    .classList.contains('active');
  const numbersActive = document
    .getElementById('numbers')
    .classList.contains('active');

  alphabet = '';
  if (lettersActive) alphabet += alphabets.letters;
  if (numbersActive) alphabet += alphabets.numbers;

  updateAnswer();
}

function playAudio() {
  const i = random(18) + 1;
  const el = document.getElementById('audio');
  el.src = `audio/ka-chow-${i}.m4a`;
  el.play();
}

document.addEventListener('keydown', (e) => {
  if (e.key.toUpperCase() === answer.toUpperCase()) {
    confetti({ particleCount: 180, spread: 140 });
    playAudio();
    updateAnswer();
  }
});

updateAnswer();
