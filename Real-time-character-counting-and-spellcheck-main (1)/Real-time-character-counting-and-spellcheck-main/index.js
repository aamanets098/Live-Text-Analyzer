
// const charval = document.getElementById("textarea");
// const totalcount = document.getElementById("total-count");
// const remainingcount = document.getElementById("remaining-count");
// const limitInput = document.getElementById("limit-input");
// const changeLimitButton = document.getElementById("change-limit-button");

// const updateCount = () => {
//     const userchar = charval.value.length;
//     totalcount.innerText = userchar;
//     remainingcount.innerText = charval.maxLength - userchar;

//     // Grammar checking
//     const grammarErrors = checkGrammar(charval.value);
//     // Display or handle grammar errors as needed
//     console.log("Grammar Errors:", grammarErrors);

//     // Spell checking and highlighting on hover
//     setupSpellChecker();
// };

// charval.addEventListener("input", updateCount);

// const copyText = () => {
//     charval.select();
//     charval.setSelectionRange(0, charval.value.length);
//     document.execCommand("copy");

//     charval.classList.add('highlighted-text');
//     setTimeout(() => {
//         charval.classList.remove('highlighted-text');
//     }, 1000);
// };

// const clearText = () => {
//     charval.value = "";
//     updateCount();
// };

// const saveTextLocally = () => {
//     localStorage.setItem("savedText", charval.value);
//     alert("Text saved locally!");
// };

// const loadTextLocally = () => {
//     const savedText = localStorage.getItem("savedText");
//     if (savedText) {
//         charval.value = savedText;
//         updateCount(); // Update counts after loading text
//     }
// };

// const changeCharacterLimit = () => {
//     const newLimit = parseInt(limitInput.value, 10);
//     if (!isNaN(newLimit) && newLimit > 0) {
//         charval.maxLength = newLimit;
//         updateCount(); // Update counts after changing the limit
//         alert("Character limit changed!");
//     } else {
//         alert("Please enter a valid positive number for the character limit.");
//     }
// };

// changeLimitButton.addEventListener("click", changeCharacterLimit);


// // Function to check grammar (replace with your actual implementation)
// function checkGrammar(text) {
//     // Your grammar checking logic here
//     return 0; // Placeholder, replace with actual result
// }

// // Function to set up spell checker (replace with your actual implementation)
// function setupSpellChecker() {
//     // Your spell checker setup logic here
// }


// const copyText = () => {
//     charval.select();
//     charval.setSelectionRange(0, charval.value.length);
//     document.execCommand("copy");

//     const colorPicker = document.getElementById("color-picker");
//     const highlightColor = colorPicker.value;

//     charval.style.backgroundColor = highlightColor;

//     setTimeout(() => {
//         charval.style.backgroundColor = ""; // Reset background color after a delay
//     }, 1000);
// };





const charval = document.getElementById("textarea");
const totalcount = document.getElementById("total-count");
const remainingcount = document.getElementById("remaining-count");
const limitInput = document.getElementById("limit-input");
const changeLimitButton = document.getElementById("change-limit-button");

const updateCount = () => {
    const userchar = charval.value.length;
    totalcount.innerText = userchar;
    remainingcount.innerText = charval.maxLength - userchar;

    // Grammar checking
    const grammarErrors = checkGrammar(charval.value);
    // Display or handle grammar errors as needed
    console.log("Grammar Errors:", grammarErrors);

    // Spell checking and highlighting on hover
    setupSpellChecker();
};

charval.addEventListener("input", updateCount);

const copyText = () => {
    charval.select();
    charval.setSelectionRange(0, charval.value.length);
    document.execCommand("copy");

    const colorPicker = document.getElementById("color-picker");
    const highlightColor = colorPicker.value;

    charval.style.backgroundColor = highlightColor;

    setTimeout(() => {
        charval.style.backgroundColor = ""; // Reset background color after a delay
    }, 1000);
};

const clearText = () => {
    charval.value = "";
    updateCount();
};

const saveTextLocally = () => {
    localStorage.setItem("savedText", charval.value);
    alert("Text saved locally!");
};

const loadTextLocally = () => {
    const savedText = localStorage.getItem("savedText");
    if (savedText) {
        charval.value = savedText;
        updateCount(); // Update counts after loading text
    }
};

const changeCharacterLimit = () => {
    const newLimit = parseInt(limitInput.value, 10);
    if (!isNaN(newLimit) && newLimit > 0) {
        charval.maxLength = newLimit;
        updateCount(); // Update counts after changing the limit
        alert("Character limit changed!");
    } else {
        alert("Please enter a valid positive number for the character limit.");
    }
};

changeLimitButton.addEventListener("click", changeCharacterLimit);
