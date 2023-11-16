var strStr = function (haystack, needle) {
    if (needle.length > haystack.length) {
        return -1;
    }
    else {
        let j;
        for (let i = 0; i < haystack.length;) {
            j = 0;
            let counter = i;
            for (; haystack[i] == needle[j]; j++) {
                if (j == needle.length - 1) {
                    return i - j;
                }
                else {
                    i++;
                }
            }
            if (i >= haystack.length) {
                j = 0;
                break;
            }
            else {
                i = counter + 1
            }
        }
        if (j == 0) {
            return -1
        }
    }
};
