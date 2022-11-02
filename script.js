const inputTextField = document.getElementById('input-text-field');
const calculateButton = document.getElementById("calculate-button");
const displayInputString = document.getElementById('display');
const words = document.getElementById('number-of-words');

updateTextAndWords = () => {
    displayInputString.textContent = inputTextField.value;
    words.textContent = inputTextField.value.length;

    let str = displayInputString.textContent;

    let wordsArr = str.split(' ');
    let wordsLength = wordsArr.length;

    words.textContent = wordsLength;
}

calculateButton.addEventListener ('click', updateTextAndWords);