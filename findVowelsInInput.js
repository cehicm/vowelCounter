let input = "Blalda jfajw qqeree dca";
input = input.toLowerCase();

const vowels = ["a", "e", "i", "o", "u", "y"];
let resultArray = [];

for (let inputIndex = 0; inputIndex <= input.length; inputIndex++) {
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    if (input[inputIndex] === vowels[vowelsIndex]) {
      resultArray.push(input[inputIndex]);
    }
  }
}
console.log(resultArray);
