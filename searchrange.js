var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] < target) {
      left = mid + 1;
      continue;
    }
    if (nums[mid] > target) {
      right = mid - 1;
      continue;
    }
    let first = mid,
      last = mid;
    while (nums[first] === target) first--;
    while (nums[last] === target) last++;

    return [first + 1, last - 1];
  }
  return [-1, -1];
};
