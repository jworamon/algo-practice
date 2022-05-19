/* You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock 
and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.
*/

// Time: O(N) Space: O(1)
const maxProfit = (arr) => {
    let profit = 0;
    let buy = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        if (current < buy) {
            buy = current;
        }
        profit = Math.max(profit, current - buy);
    }
    return profit;
}