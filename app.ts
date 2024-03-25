#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import confirm from "@inquirer/confirm";

let quitProgram: boolean = false;
do {
  quitProgram = false;
  console.clear();
  const randomNumber: number = Math.floor(Math.random() * 6 + 1);
  console.clear();
  console.log(
    chalk.bgYellow(chalk.bold("\n<<<<< NUMBER GUESSING GAME >>>>>\n")) +
      chalk.gray(chalk.italic("version: 1.0.0\n")) +
      chalk.gray(chalk.italic("Design By: Atiq Sarwar\n"))
  );
  const guessNumber = await inquirer.prompt({
    name: "guessNum",
    type: "number",
    message: "Please guess a number between 1-6: ",
  });

  if (guessNumber.guessNum < 0 || guessNumber.guessNum > 6) {
    console.log(chalk.redBright("\nPlease enter the number between range.\n"));
  } else {
    if (randomNumber === guessNumber.guessNum) {
      console.log(
        chalk.greenBright(
          "\nCongratulations! you guessed the correct number.\n"
        )
      );
    } else {
      console.log(chalk.redBright("\nOops! you guessed incorrect number.\n"));
    }
  }
  let restart = await confirm({
    default: false,
    message: "Do you want to try again?",
  });
  quitProgram = restart.valueOf();
} while (quitProgram);
