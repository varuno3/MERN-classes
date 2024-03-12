let jokeCreate = require('one-liner-joke');
const { generateFromEmail, generateUsername } = require("unique-username-generator");


let joke = jokeCreate.getRandomJoke();
console.log(joke);

const name = generateUsername();
console.log(name);

const fromEmail = generateFromEmail(
    "varunbadoni987@gmail.com",
    2
);

console.log(fromEmail);

