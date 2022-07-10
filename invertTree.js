var invertTree = function (root) {
  if (root == null) return null;
  else {
    [root.left, root.right] = [root.right, root.left];
    root.left = invertTree(root.left);
    root.right = invertTree(root.right);
  }
  return root;
};
