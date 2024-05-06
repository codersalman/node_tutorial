const cities = require("cities-list");
const readline = require('node:readline');


const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Enter your city to check : ', (answer) => {

    if (cities[answer] !== undefined ) {
        console.log(`The city ${answer} exists`);
    }else {
        console.log(`The city ${answer} does not exist`);
    }

    rl.close();
});

