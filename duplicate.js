function containsDuplicate(nums) {
  let mySet = {};
  for (let i = 0; i < nums.length; i++) {
    if (mySet[nums[i]]) return true;

    mySet[nums[i]] = true;
  }
  return false;
}
