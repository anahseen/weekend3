const nums = [0.95, 0, 0, 0, 0, 0, 0];
let result = null;

const findUniq = () => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
           if (nums[i] !== nums[j]) {
               result = nums[i];
               
               return result
           }
            
        }
    }
    
}
console.log(findUniq(nums));