/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const sWords = s.split(" ");

    for(let i = sWords.length - 1; i >= 0; i--) {
	    if (sWords[i] != "") {
    	    return sWords[i].length;
        }
  	    else {
    	    continue;
        }
    }
}
