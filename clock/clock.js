function speakText(text) {
  // Get the SpeechSynthesis interface
  const synth = window.speechSynthesis;

  // Create a new speech synthesis utterance object
  const utterance = new SpeechSynthesisUtterance(text);

  // Speak the utterance
  synth.speak(utterance);
}

// Get 3 random numbers between 1 and 12
function getThreeNumbers() {
  let numbers = [];
  for (let i = 0; i < 3; i++) {
    numbers.push(Math.floor(Math.random() * 12) + 1);
  }

  return numbers;
}

function getNextSequence() {
  const sequence = getThreeNumbers();
  while (sequence[0] === sequence[1] || sequence[1] === sequence[2] || sequence[0] === sequence[2]) {
    sequence = getThreeNumbers();
  }
  const sequenceText = sequence.join(", ");
  // TODO: display the sequence on the screen
  numtext = document.getElementById("numtext");
  // numtext.innerHTML = sequenceText;
  numtext.textContent = sequenceText;
  console.log(sequenceText);
  speakText(sequenceText);
}