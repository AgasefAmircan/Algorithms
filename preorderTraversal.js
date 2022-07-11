var preorderTraversal = function(root) {
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
    arr.push(root.val);
    traverse(root.left,arr);
    traverse(root.right,arr);
    }
};