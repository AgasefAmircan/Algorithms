function maximumProduct (nums) {
    let numsArr=nums.sort((a,b)=>(a-b));
    let len=numsArr.length
        let result1=numsArr[0]*numsArr[1]*numsArr[len-1]
        let result2=numsArr[len-1]*numsArr[len-2]*numsArr[len-3];
        return Math.max(result1,result2)
};