console.log('Hello World');
// read from the command line
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// read from the command line
rl.question('Enter a command: ', (answer) => {
    console.log(`Command entered: ${answer}`);
    rl.close();
});

