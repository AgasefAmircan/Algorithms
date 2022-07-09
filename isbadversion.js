var solution = function(isBadVersion) {
    return function(n) {
        let start=1;
        let end=n;
        let mid;
        while(start<=end){
            mid=Math.floor((start+end)/2);
            if(isBadVersion(mid)){
                end=mid-1;
            }
            else{
                start=mid+1;
            }
        }
        return start;
    };
};