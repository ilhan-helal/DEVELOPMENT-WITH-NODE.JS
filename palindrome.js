const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a word: ', (word) => {
  const reversed = word.split('').reverse().join('');

  if (word === reversed) {
    console.log("Palindrome");
  } else {
    console.log("Not a Palindrome");
  }

  rl.close();
});