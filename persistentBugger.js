//*##### SOLUTION #####

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

//*##### EXAMPLES #####

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

//*##### SOLUTION #####

// First I need to convert the parameter to array, every number need to be a number
// I create a count variable to store the number of multiply
// Maybe I need to use a while loop. While the array length is 2 I multiply and create
// new array. Also add a counto to the variable

function persistence(num) {
  let arrNum = num
    .toString()
    .split('')
    .map(n => Number(n));

  let counter = 0;

  while (arrNum.length >= 2) {
    const product = arrNum.reduce((a, b) => a * b);
    arrNum = product
      .toString()
      .split('')
      .map(n => Number(n));
    counter += 1;
  }

  return counter;
}

//*##### CLEVER SOLUTION FROM CODEWARS #####

// function persistence(num) {
//    for (var i = 0; num > 9; i++) {
//      num = num.toString().split('').reduce((t, c) => c * t);
//    }
//    return i;
// }
