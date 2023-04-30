// import dotenv from 'dotenv';
// import minimist from 'minimist';

// dotenv.config();

// console.log(minimist(process.argv.slice(2)));

import readline from 'readline';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('What is your name?', (userName) => {
  console.log(`Hello ${userName}`);

  terminal.question("What's your age? ", (age) => {
    console.log(`Cool, I'm 25 years old, and you are ${age} years old.`);
    terminal.close();
  });
});
