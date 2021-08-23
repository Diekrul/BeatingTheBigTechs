/**
 * @param {number} n
 * @return {number}
 * 
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

 */
/**
 * @param {number} n
 * @return {number}*/

var climbStairs = function (n) {
  const waysToClimb = [];

  const calculateWays = (acumSteps, steps) => {
    if (acumSteps <= 0) return;
    if (acumSteps - 1 > 0) {
      waysToClimb.push(1);
      calculateWays(acumSteps - 1, steps);
    }
    if (acumSteps - 2 > 0) {
      waysToClimb.push(2);
      calculateWays(acumSteps - 2, steps);
    }
  };

  calculateWays(n);
  console.log(waysToClimb);
};
