#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        message: "Please type a number between 1-10:",
        type: "number",
        name: "userGuessednumber",
    },
]);
if (answers.userGuessednumber === randomNumber) {
    console.log("Congratulations you guessed the right number.");
}
else
    console.log("You guessed the wrong number please try again");
