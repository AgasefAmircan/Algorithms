function backspaceCompare(s, t) {
    let first=[] ,second=[];
    for(let i=0;i<=s.length;i++){
        if(s[i]!=="#"){
            first.push(s[i]);
        }
        else{
            first.pop();
        }
    }
        for(let j=0;j<=t.length;j++){
        if(t[j]!=='#'){
            second.push(t[j]);
        }
        else{
            second.pop();
        }
    }
        return first.join("")===second.join("");
    };