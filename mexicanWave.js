//* ##### INSTRUCTIONS #####

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

//* ##### EXAMPLE #####
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//* ##### RESULT #####

function wave(str) {
  const charsArr = Array(str.length).fill(str);

  const result = [];
  charsArr.forEach((str, i) => {
    let newStr = str.split('');
    if (newStr[i] !== ' ') {
      newStr[i] = newStr[i].toUpperCase();
      result.push(newStr.join(''));
    }
  });

  return result;
}

console.log(wave('two words'));
console.log(wave('hello'));

//* ##### CLEVER SOLUTION FROM CODEWARS #####

function wave(str) {
  let result = [];

  str.split('').forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });

  return result;
}
