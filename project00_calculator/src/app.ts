#! /usr/bin/env node
/**
 * Simple CLI Calculator using Typescript, Node.js and Inquirer.js
 */

import { handleCalculation, logResult, takeInput, welcome } from "./helpers.js";

//================Main================
const main = async () => {
  await welcome("Welcome to the CLI Calculator!");
  const { num1, num2, operation } = await takeInput();
  const result = handleCalculation(operation, num1, num2);
  logResult(result);
};

//================Execution================
main().catch((err) => {
  console.error(err);
  process.exit(1);
});
