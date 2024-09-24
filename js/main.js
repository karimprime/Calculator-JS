let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operation = null;


function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    display.value = '0';
}


function appendNumber(number) {
    if (currentInput.length >= 10) return;
    if (currentInput === '0' && number === '0') return;
    currentInput += number;
    updateDisplay();
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function backspace() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1); // Remove the last character
    }
    updateDisplay();
}

function appendOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr === 0 ? 'Error' : prev / curr;
            break;
        case '%':
            result = prev % curr;
            break;
        case '^':
            result = Math.pow(prev, curr);
            break;
        default:
            return;
    }

    currentInput = result.toString().length > 10 ? result.toFixed(5).toString() : result.toString();
    operation = null;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput || '0';
}

function roundNumber() {
    if (currentInput === '') return;
    currentInput = Math.round(parseFloat(currentInput)).toString();
    updateDisplay();
}


function randomNumber() {
    currentInput = Math.random().toFixed(2).toString();
    updateDisplay();
}
