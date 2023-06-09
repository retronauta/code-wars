//*########## INSTRUTIONS ###########

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

//* EXAMPLE
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//* SOLUTION

// I will to convert all the letters to .lowerCase
// Next, I convert the parameter to array with every letter
// I'm going to create a variable to store the count of duplicates letters
// I'm going to sort al chars, next with an foreach method can loop every letter to compare
// If the letter has at least one repeat and isn't includes un te result array, I push it to array for duplicate letters.
// After all I will can return the length of the duplicate letters

function duplicateCount(text) {
  // 1. Convert parameter
  const lettersArr = text.toLowerCase().split('').sort();

  // 2. Create array to store duplicate letters
  const result = [];

  // 3. loop lettersArr and compare it
  lettersArr.forEach((char, i) => {
    if (char === lettersArr[i + 1] && !result.includes(char)) result.push(char);
  });

  return result.length;
}

duplicateCount('aabbacDee');
duplicateCount('ABBA');
duplicateCount('indivisibility');
duplicateCount('aA11');
