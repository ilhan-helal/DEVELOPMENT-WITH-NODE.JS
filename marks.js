const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

    rl.question('Enter English marks: ', (english) => {
        english = Number(english);

    rl.question('Enter Science marks: ', (science) => {
        science = Number(science);

    rl.question('Enter Maths marks: ', (hindi) => {
        hindi = Number(hindi);    

    const total = english + science + hindi;
    const percentage = (total / 300) * 100;

    console.log(`Total Marks: ${total}`);
    console.log(`Percentage: ${percentage}%`);

    rl.close();
    });
  });
});
