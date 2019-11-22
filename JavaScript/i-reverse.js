'use strict';

const benchmark = require('./2-benchmark.js');

const withBuiltInReverse = () => {
  const arr = new Array(7).fill(null).map(Math.random)
  arr.reverse()
  return arr
}

const forBasedReverse = () => {
  const arr = new Array(7).fill(null).map(Math.random)
  const length = arr.length
  const halfOFLength = length / 2
  for (let i = 0, j = length - 1; i < halfOFLength; i++) {
    const curr = arr[i]
    arr[i] = arr[j - i]
    arr[j - i] = curr
    j--
  }
  return arr
}

benchmark.do(100000, [
  withBuiltInReverse,
  forBasedReverse,
]);
