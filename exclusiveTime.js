/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const result = new Array(n).fill(0);
  const stack = [];
  let prevTime;
  //La parte importante es que el stack tiene adentro el ID, y ese ID es la posicion en el arreglo result.
  for (let i = 0; i < logs.length; i++) {
    let log = logs[i].split(":");
    const id = Number(log[0]);
    const instrunction = log[1];
    const time = Number(log[2]);
    if (instrunction === "start") {
      if (stack.length > 0) {
        let lastIdOnStack = stack[stack.length - 1];
        result[lastIdOnStack] = result[lastIdOnStack] + (time - prevTime);
      }
      stack.push(id);
      prevTime = time; // Set the previous start time to the time now
    } else {
      const last = stack.pop(); // Get the last function to start from the top of the stack
      result[last] = result[last] + (time - prevTime + 1); // Increment the sum from start to end, inclusive
      prevTime = time + 1; // Set the previous start time to be one after this function ended
    }
  }

  return result;
};
