var Command = require('commander').Command;
// Define a new command
var program = new Command();
program
    .version('1.0.0')
    .description('A simple command-line interface')
    .option('-n, --name <name>', 'Your name')
    .option('-a, --age <age>', 'Your age')
    .action(function (cmd) {
    console.log("Hello, ".concat(cmd.name, "! You are ").concat(cmd.age, " years old."));
});
// Parse the command-line arguments
program.parse(process.argv);
