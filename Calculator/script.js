function appendCharacter(character) {
  document.getElementById('display').value += character;
}

function deleteLastCharacter() {
  let currentDisplay = document.getElementById('display').value;
  document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    // eval() can solve string like maths
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
