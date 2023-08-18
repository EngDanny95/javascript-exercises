let word = '';
const reverseString = function (string) {
    for (i = string.length - 1; i >= 0; i--) {
        let rev = string[i];
        word += rev;
    };
    return word;
}
// Do not edit below this line
module.exports = reverseString;
