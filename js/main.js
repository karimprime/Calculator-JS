
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f4f9;
}

.calculator {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 330px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.display {
    background-color: #000;
    color: #fff;
    font-size: 1em;
    padding: 20px;
    border-radius: 10px;
    text-align: right;
    margin-bottom: 20px;
    min-height: 60px;
    word-wrap: break-word;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 100%;
}

.button {
    background-color: #f1f1f1;
    border: none;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #d1d1d1;
}

.button.operation {
    background-color: #0066ff;
    color: #fff;
}

.button.operation:hover {
    background-color: #0f27ff;
}

.button.equal {
    background-color: #0066ff;
    color: #fff;
    grid-column: span 1; 
}

.button.equal:hover {
    background-color: #0f27ff;
}

.button.clear {
    background-color: #ff0000;
    color: #fff;
}

.button.clear:hover {
    background-color: #cf0202;
}

@media (max-width: 400px) {
    .display {
        font-size: 1.2em;
    }

    .button {
        padding: 15px;
        font-size: 0.9rem;
    }
}
