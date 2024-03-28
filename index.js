#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2)User input for gussing number
// 3) Computer user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome To Number Guessing Game");
const awnsers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    }
]);
if (awnsers.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guessed wrong number");
}
else {
    console.log("You guessed wrong number");
}
