var postorderTraversal = function(root) {
    let arr=[];
    traverse(root,arr);
    return arr;
};
var traverse=function(root,arr){
    if(root===null) {
        return;
    }
    else
    {
    traverse(root.left,arr);
    traverse(root.right,arr);
    arr.push(root.val);
    }
};