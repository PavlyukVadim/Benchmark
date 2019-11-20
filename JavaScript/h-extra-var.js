'use strict';

const benchmark = require('./2-benchmark.js');

const withExtraConst = () => {
  let k = 0
  for (let i = 0; i < 100; i++) {
    const extraVar = Math.random() > 0.5
    if (extraVar) k++
  }
  return k
}

const withExtraLet = () => {
  let k = 0
  for (let i = 0; i < 100; i++) {
    let extraVar = Math.random() > 0.5
    if (extraVar) k++
  }
  return k
}

const withExtraVar = () => {
  let k = 0
  for (let i = 0; i < 100; i++) {
    var extraVar = Math.random() > 0.5
    if (extraVar) k++
  }
  return k
}

const noExtra = () => {
  let k = 0
  for (let i = 0; i < 100; i++) {
    if (Math.random() > 0.5) k++
  }
  return k
}

// console.log(noExtra())

benchmark.do(1000000, [
  withExtraConst,
  withExtraLet,
  withExtraVar,
  noExtra,
]);
