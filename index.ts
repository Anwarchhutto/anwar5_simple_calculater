#! /usr/bin/env node
//    SHABANG

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "fisrtNumber" },
  { message: "Enter Second number", type: "number", name: "secondNumber" },
  {
    message: " select one of the operators to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Conditional statement

if (asnwer.operators === "Addition") {
  console.log(asnwer.fisrtNumber + asnwer.secondNumber);
} else if (asnwer.operators === "Subtraction") {
  console.log(asnwer.fisrtNumber - asnwer.secondNumber);
} else if (asnwer.operators === "Multiplication") {
  console.log(asnwer.fisrtNumber * asnwer.secondNumber);
} else if (asnwer.operators === "Division") {
  console.log(asnwer.fisrtNumber / asnwer.secondNumber);
}
