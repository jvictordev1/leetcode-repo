var plusOne = function(digits) {
    let i = digits.length - 1;
    if (digits[i] != 9) {
        digits[i] = digits[i] + 1;
    }
    else {
        for (; digits[i] == 9; i--) {
            if (i == 0) {
                digits[i] = 0;
                digits.unshift(0);
                break;
            }
            digits[i] = 0;
        }
        digits[i] = digits[i] + 1;
    }
    return digits
};
