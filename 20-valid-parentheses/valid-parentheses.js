/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    for(let i=0;i<s.length;i++){
        let ch=s[i];
        if(ch==="("){
            stack.push(ch);
        }
        else if(ch==="["){
            stack.push(ch);
        }
        else if(ch==="{"){
            stack.push(ch);
        }
        else{
            if(stack.length===0){
                return false;
            }
            let top = stack[stack.length - 1];

            if (
                (ch === ")" && top !== "(") ||
                (ch === "]" && top !== "[") ||
                (ch === "}" && top !== "{")
            ) {
                return false;
            }
            
                stack.pop()
            
            
        }
    }
    return stack.length===0;
};