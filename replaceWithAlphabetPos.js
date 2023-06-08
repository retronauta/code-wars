//###### INSTRUCTIONS ########

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// EXAMPLE

// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//####### SOLUTION #########

// every letter correspond to number
// create a structure with all letter, every index belongs to a letter +1
// when i run the program, i'm going to select every letter and push it to an empty array
// if the char isn't in the array, the doesn't push anything to arr

function alphabetPosition(text) {
  // 1. create an array with all letter
  const lettersArr = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  // 2. create an array from the argument text. This array can omit the spaces or another char that doesnt be letter and convert the letters to lower case
  const argArr = text
    .toLowerCase()
    .split('')
    .filter(char => lettersArr.includes(char));

  //3. map over arguments array, find every index coincidence and + 1, this saved at result const
  const result = argArr.map(char => lettersArr.indexOf(char) + 1);

  //4. return the new created array with join method over it
  return result.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
