let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operation = null;

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    display.innerText = '0';
}

function appendNumber(number) {
    if (currentInput.length >= 10) return;
    if (currentInput === '0' && number === 0) return;
    currentInput += number;
    updateDisplay();
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
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
            result = prev ** curr;
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
    display.innerText = currentInput || '0';
}
