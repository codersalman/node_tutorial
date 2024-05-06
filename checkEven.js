const cities = require("cities-list");
const readline = require('node:readline');
const {isEven} = require("@oriano-dev/is-even");

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Enter your even Number to check : ', (answer) => {

    const result = isEven.number(parseInt(answer,0), "even");

    if (result === true) {
        console.log(`The number ${answer} is even`);
    }else {
        console.log(`The number ${answer} is odd`);
    }

    rl.close();
});
