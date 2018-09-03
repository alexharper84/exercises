// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//solution 1

// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//  return arr.join('');
// }

// module.exports = reverse;

// solution 2

function reverse(str) {
let reversed = '';
// for (var i = 0; i < str.length; i++{} is refactored to:
for (let character of str) {
  reversed = character + reversed;
}
return reversed;
}

module.exports = reverse;
