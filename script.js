const inputTextField = document.getElementById('input-text-field');
const calculateButton = document.getElementById("calculate-button");
const displayInputString = document.getElementById('display');
const words = document.getElementById('number-of-words');

updateTextAndWords = () => {
    if (inputTextField.value.trim() == "") {
        window.alert("Enter valid input!");
    }
    else {
        displayInputString.textContent = inputTextField.value;
        words.textContent = inputTextField.value.length;

        let str = inputTextField.value;

        let wordsLength = str.trim().split(/\s+/).length;

        if (wordsLength > 1) {
            words.textContent = wordsLength + " words";
        }
        else {
            words.textContent = wordsLength + " word";
        }
    }
}

calculateButton.addEventListener ('click', updateTextAndWords);