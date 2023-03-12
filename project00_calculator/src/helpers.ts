import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

//================Helper Functions================

/**
 * Welcome message
 * @param message - message to display
 * @returns void
 * @example welcome("Welcome to the CLI Calculator!");
 */
export const welcome = async (message: string) => {
  const glitch = chalkAnimation.neon(message);
  await sleep(3000);
  glitch.stop();
  log("");
};

/**
 * Take input from user
 * @returns Answers object with num1, num2 and operation
 */

export const takeInput = async () => {
  const answers: Answers = await inquirer.prompt([
    {
      name: "num1",
      type: "number",
      message: "Enter first number:",
    },
    {
      name: "num2",
      type: "number",
      message: "Enter second number:",
    },
    {
      name: "operation",
      type: "list",
      message: "Select operation:",
      choices: ["add", "subtract", "multiply", "divide"],
    },
  ]);

  return answers;
};

/**
 * Handle calculation based on operation
 *
 * @param operation - add, subtract, multiply, divide
 * @param num1 - first number
 * @param num2 - second number
 * @returns result of calculation
 * @example handleCalculation("add", 1, 2);
 */
export const handleCalculation = (
  operation: Operation,
  num1: number,
  num2: number
) => {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
  }
};

/**
 * Log result in pretty format to console and throw error if invalid operation
 * @param result - result of calculation
 * @returns void
 * @example logResult(3);
 * @example logResult(NaN);
 */
export const logResult = (result: number) => {
  if (!isNaN(result)) log(title(`Result:`), success(result));
  else log(error(`Invalid number entered!`));
};

export const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

//================extras================
export const log = console.log;
export const success = chalk.greenBright;
export const info = chalk.blueBright;
export const warn = chalk.yellowBright;
export const error = chalk.redBright;
export const bold = chalk.bold;
export const title = chalk.bold.underline;

//================Types================
export type Operation = "add" | "subtract" | "multiply" | "divide";

export type Answers = {
  num1: number;
  num2: number;
  operation: Operation;
};
