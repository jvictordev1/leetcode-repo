/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length;) {
            if(nums[i] == nums[j]) {
                nums.splice(j,1);
                j = i + 1;
            }
            else {
          	    j++;
            }
        }
    }
};
