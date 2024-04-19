/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Base cases: if there are no or negative steps, or just 1 step
    if (n <= 1) {
        return 1;
    }

    // Initialize the base cases
    let twoStepsBack = 1;  // ways(0)
    let oneStepBack = 1;   // ways(1)

    // Variable to store current number of ways to climb to the current step
    let currentWays = 0;

    // Start calculating from the second step up to the nth step
    for (let i = 2; i <= n; i++) {
        // The current number of ways is the sum of the ways to the two previous steps
        currentWays = oneStepBack + twoStepsBack;

        // Update the last two steps
        twoStepsBack = oneStepBack;
        oneStepBack = currentWays;
    }

    // The nth step's number of ways is stored in oneStepBack now
    return oneStepBack;
};
