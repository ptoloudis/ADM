const { Command } = require('commander');

// Define a new command
const program = new Command();
program
  .version('1.0.0')
  .description('A simple command-line interface')
  .option('-n, --name <name>', 'Your name')
  .option('-a, --age <age>', 'Your age')
  .action((cmd) => {
    console.log(`Hello, ${cmd.name}! You are ${cmd.age} years old.`);
  });

// Parse the command-line arguments
program.parse(process.argv);
