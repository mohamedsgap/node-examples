const readline = require('readline');
const util = require('util');

let RL = readline.createInterface(process.stdin, process.stdout);

RL.question("What's your name ??", (name) => {
    RL.setPrompt(`${name} How old are you`);

    RL.prompt();
    RL.on("line", (age) => {
        if (age < 18) {
            util.log(`${name.trim()} because ur age is ${age} is less than 18 you are not Me!!`);
            RL.close();
        } else {
            util.log(`${name.trim()} great ur age is  ${age}  is more than 18 you are yourself!!`);
            RL.close();
        }
    });
});

