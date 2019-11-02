'use strict';

const benchmark = require('./2-benchmark.js');

const number = 1;
const string = 'foo';
const boolean = true;
const obj = {};
const date = new Date();
const array = [];
const set = new Set();
const fn = () => {};

const keys = [
  number,
  string,
  boolean,
  obj,
  date,
  array,
  set,
  fn,
];
const getKey = () => keys[Math.floor(Math.random() * keys.length)];

// test if-else

const testIfElse = () => {
  const key = getKey();
  if (key === number) return string;
  else if (key === string) return boolean;
  else if (key === boolean) return number;
  else if (key === obj) return set;
  else if (key === date) return array;
  else if (key === array) return date;
  else if (key === set) return fn;
  else if (key === fn) return set;
};

// test switch-case

const testSwitchCase = () => {
  const key = getKey();
  switch (key) {
    case number: return string;
    case string: return boolean;
    case boolean: return number;
    case obj: return set;
    case date: return array;
    case array: return date;
    case set: return fn;
    case fn: return set;
  }
};

// test map

const map = new Map([
  [number, string],
  [string, boolean],
  [boolean, number],
  [obj, set],
  [date, array],
  [array, date],
  [set, fn],
  [fn, set],
]);

const testMap = () => {
  const key = getKey();
  return map.get(key);
};

benchmark.do(1000000, [
  testIfElse,
  testSwitchCase,
  testMap,
]);
