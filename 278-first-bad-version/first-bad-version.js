/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    //  let left=1;
    //  let right=n;
    //  let answer=-1;
    //  while(left<=right){
    //     let mid= Math.floor((left+right)/2);
    //     if(isBadVersion(mid)){
    //         answer=mid;
    //         right=mid-1;
    //     }
    //     else{
    //         left=mid+1;
    //     }
    //  }

    return function(n) {
        let left=1;
     let right=n;
     let answer=-1;
     while(left<=right){
        let mid= Math.floor((left+right)/2);
        if(isBadVersion(mid)){
            answer=mid;
            right=mid-1;
        }
        else{
            left=mid+1;
        }
     }
     return answer;
        
    };
};