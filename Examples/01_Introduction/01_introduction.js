/**
 * Link: https://www.programiz.com/javascript/examples
 */

/**
 * 02 - Program to Add Two Numbers Entered By The Users
 */

// let num1 = parseInt(prompt('Enter the first number'));
// let num2 = parseInt(prompt('Enter the second number'));

// let num1 = Number(prompt('Enter the first number'));
// let num2 = Number(prompt('Enter the second number'));

// if (!isNaN(num1) && !isNaN(num2)) {
//   console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
// } else {
//   console.log('Wrong input!');
// }
// ----------------------------------------------------------------------------------

/**
 * 03 - FIND THE SQUARE ROOT
 */

// function sqrt(n) {
//   if (isNaN(n) || n < 0) {
//     return NaN;
//   }

//   if (n === 0 || n === 1) {
//     return n;
//   }

//   let i = 1;
//   while (i * i <= n) {
//     i++;
//   }
//   return i - 1;
// }

// Testing
// console.log(sqrt('hello')); // NaN
// console.log(sqrt(-4)); // NaN

// console.log(sqrt(0)); // 0
// console.log(sqrt(1)); // 1

// console.log(sqrt(2)); // 1
// console.log(sqrt(3)); // 1
// console.log(sqrt(4)); // 2
// console.log(sqrt(9)); // 3
// ----------------------------------------------------------------------------------

/**
 * Write a program indicating an even number without modulo operator (%)
 */

// function isEven(n) {
//   if (n < 0) {
//     return isEven(-n);
//   }

//   if (n === 0) {
//     return true;
//   } else if (n === 1) {
//     return false;
//   } else {
//     return isEven(n - 2);
//   }
// }

// // Testing
// console.log(isEven(0)); // true
// console.log(isEven(1)); // false
// console.log(isEven(2)); // true
// console.log(isEven(3)); // false
// console.log(isEven(-4)); // true
// console.log(isEven(-9)); // false
