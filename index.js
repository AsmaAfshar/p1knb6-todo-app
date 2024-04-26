#! /usr/bin/env node
//this line is called the shebang, it tells the OS to run it with node js
//Import the "inquirer" module, which is a command line interface for node.js
import inquirer from "inquirer";
//Declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentences",
        type: "input",
        message: "Enter your sentences to count the word:"
    }
]);
const words = answers.Sentences.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
