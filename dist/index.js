"use strict";
const word = String(prompt("enter a word"));
duringGame(word);
function duringGame(word) {
    const arr = [" "];
    let countFails = 0;
    while (countFails < 5 && wordToAsteriksWithChosenCharacters(word, arr) != word) {
        alert(wordToAsteriksWithChosenCharacters(word, arr));
        alert("you have " + countFails + " fails");
        const letter = guessLetter();
        if (word.includes(letter)) {
            arr.push(letter);
        }
        else {
            countFails++;
        }
    }
    if (wordToAsteriksWithChosenCharacters(word, arr) == word) {
        alert("congratulations the word is:" + word);
    }
    else {
        alert("you lost the world is:" + word);
    }
}
function guessLetter() {
    const letter = String(prompt("guess a letter"));
    if (letter == null || letter.length > 1) {
        alert("wrong input");
        return guessLetter();
    }
    return letter;
}
function wordToAsteriksWithChosenCharacters(word, arr) {
    let asterisks = "";
    let ind;
    for (let i = 0; i < word.length; i++) {
        ind = null;
        arr.forEach(function (value, index) {
            if (word.charAt(i) == value) {
                ind = index;
            }
        });
        if (ind != null) {
            asterisks = asterisks + arr[ind];
        }
        else {
            asterisks = asterisks + "*";
        }
    }
    return asterisks;
}
