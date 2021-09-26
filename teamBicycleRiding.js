function teamBicycleRiding(redShirtSpeeds, blueShirtSpeeds, fastest) {
  /*
    findMaxTotalSpeed():
    To get the maximum total speed we want to match the slowest person with the fastest person.
    With that, we get the maximum difference between speeds and get the max possible speed.
    For this we can sort the arrays in different directions (from min to max, and from max to min)
    and get the max between speeds. 
    */
  const findMaxTotalSpeed = () => {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);
    let totalMaxSpeed = 0;
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      const diffBetweenRiders = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
      totalMaxSpeed = totalMaxSpeed + diffBetweenRiders;
    }
    return totalMaxSpeed;
  };

  /*
    findMinTotalSpeed():
    To get the min total speed we want to match the speeds to try to reduce the difference as much as possible.
    For this we can sort the arrays in the same direction (both arrays from min to max)
    and get the max of the speed to get the minimum difference. 
    */
  const findMinTotalSpeed = () => {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
    let totalMinSpeed = 0;
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      const diffBetweenRiders = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
      totalMinSpeed = totalMinSpeed + diffBetweenRiders;
    }
    return totalMinSpeed;
  };

  if (fastest) {
    //If fastest = true, we want to find the max total speed.
    return findMaxTotalSpeed();
  } else {
    //If fastest = false, we want to find the min total speed.
    return findMinTotalSpeed();
  }
}

const redShirtSpeeds = [1, 5, 3, 9, 2];
const blueShirtSpeeds = [3, 6, 7, 2, 1];
const fastest = true;
const result = teamBicycleRiding(redShirtSpeeds, blueShirtSpeeds, fastest);
console.log(result);
