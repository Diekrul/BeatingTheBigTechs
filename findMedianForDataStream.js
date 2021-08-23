/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.list = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  //we can use sort, but to practice lets do it with priorityQueue
  if (this.list.length === 0) {
    this.list.push(num);
    return;
  }
  let added = false;
  for (let i = 0; i < this.list.length; i++) {
    if (this.list[i] > num) {
      this.list.splice(i, 0, num);
      added = true;
      break;
    }
  }
  if (!added) {
    this.list.push(num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.list.length % 2 !== 0) {
    return this.list[Math.floor(this.list.length / 2)];
  } else {
    return (
      (this.list[this.list.length / 2] + this.list[this.list.length / 2 - 1]) /
      2
    );
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
