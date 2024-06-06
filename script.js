const inputElement = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const isPalindrome = (text) => {
    const cleanText = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedText = cleanText.split("").reverse().join("");
    return reversedText === cleanText;
}

const checkPalindrome = () => {
    const inputTextValue = inputElement.value;
    resultDiv.classList.remove("hidden");
    if (inputTextValue) {
        if (isPalindrome(inputTextValue)) {
            resultDiv.innerHTML = `<p class="user-input"><strong>${inputTextValue}</strong> is a palindrome</p>`;
        } else {
            resultDiv.innerHTML = `<p class="user-input"><strong>${inputTextValue}</strong> is  not a palindrome</p>`;
        }
        inputElement.value = ""; 
    } else {
        alert("Please input a value");
    }
}

checkBtn.addEventListener('click', checkPalindrome);