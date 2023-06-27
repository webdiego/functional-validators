/**
 * Write the body of the `compose` function so that the subsequent code works.
 * The compose function takes an unknown number of validators and make sure every validator returns true with the
 * provided value.
 * A validator is defined as a function that takes a single value returns a boolean value.
 */

const compose = (...validators) => {
  return (v) => [...validators].every((validator) => validator(v));
};

const isString = (value) => value && typeof value === 'string';
const isNumber = (value) => value && typeof value === 'number';
const biggerThan = (number) => (value) => value > number;
const smallerThan = (number) => (value) => value < number;

const ofLength = (length) => (value) => value && value.length === length;

const isFiveLetter = compose(isString, ofLength(5));
const isTeenager = compose(isNumber, biggerThan(12), smallerThan(20));

isFiveLetter('water'); // true
isFiveLetter('focus'); // true
isFiveLetter('too long'); // false

isTeenager(2); // false
isTeenager(19); // true

console.log(isFiveLetter('water'));
console.log(isFiveLetter('focus'));
console.log(isFiveLetter('too long'));

console.log(isTeenager(1));
console.log(isTeenager(19));

console.log(isFiveLetter('s'));
console.log(isTeenager(12));
