/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = 0;
    for (let weight of weights) {
        right += weight;
    }

    let answer = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        
        let daysNeeded = 1;
        let currentLoad = 0;

        for (let weight of weights) {

            if (currentLoad + weight <= mid) {
                currentLoad += weight;
            } else {
                daysNeeded++;
                currentLoad = weight;
            }
        }
        if (daysNeeded <= days) {
            answer = mid;
            right = mid - 1; 
        } else {
            left = mid + 1; 
        }
    }

    return answer;
};
