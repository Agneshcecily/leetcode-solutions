/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left=1;
    let right=Math.max(...piles);
    let answer=-1;
    while(left<=right){
        let mid= Math.floor((left+right)/2);
        let totalHours=0;
        for(let num of piles){
            totalHours+=Math.ceil(num/mid);
        }
       if(totalHours<=h){
        answer=mid;
        right=mid-1;
       }
       else{
        left=mid+1;
       }

    }
    return answer;
    
};