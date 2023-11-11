/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var k = 0;
    for(let i = 0; i < nums.length; ) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i = 0;
            k = 0;
        }
        else {
        	k++;
        	i++;
        }
    }
    return k;
};
