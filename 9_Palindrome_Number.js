/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const text = x.toString();
    var result;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[text.length - i - 1]) {
            result = true;
        }
        else {
            result = false;
            break;
        }
    }
    return result;
};
