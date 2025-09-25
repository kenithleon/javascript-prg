var twoSum =function(nums, target){
    for(let i=0; i<nums.length;i++){
        for(let j=i+1; j<nums.length;j++){
            if(nums[j]===target-nums[i]){
                return[i,j];
            }
        }
    }
    return[]
}

console.log(twoSum([2,7,9,11],9));
console.log(twoSum([3,3],6));
console.log(twoSum([1,3,3],6));
