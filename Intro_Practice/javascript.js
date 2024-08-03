
function add7(number1){
  return number1 + 7
}

console.log(add7(10))


function multiply(multi1, multi2){
    return multi1 * multi2
}

console.log(multiply(5, 10))

function capitalize(word) {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const word = 'ninja';
console.log(capitalize(word))

function LastLetter(words) {
    if (!words) return words;
    return words.charAt(words.length - 1);
}
const words ='abcd';
console.log(LastLetter(words));

