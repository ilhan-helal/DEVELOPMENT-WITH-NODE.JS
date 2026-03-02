const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

rl.question('Pleas enter  ', (sentence) => {
  let count = 0;
  const vowels = 'aeiouAEIOU';

  for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
      count++;
    }
  }

  console.log(count);
  rl.close();
});
