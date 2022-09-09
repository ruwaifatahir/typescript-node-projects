import { question } from "readline-sync";

/**
 * CLI ATM
 * Good news! You can finally interact with the ATM using your credentials.
 * Available services:
 * Check balance
 * Deposit
 * Withdraw
 * Exit
 *
 * User enters his credentionals, user data will be generated randomly.
 * After that user can interact with the ATM, if credentials are correct.
 * If user enters wrong credentials, he will be asked to enter them again.
 * If user enters wrong pin 3 times, he will be blocked.
 */

const TRIES: number = 3;
//Main
function main(): void {
  let userId: string = "0";
  let userPin: number = 0;
  let balance: number = 0;

  let valid: boolean = false;

  for (let i = 0; i < TRIES; i++) {
    const _userId: string = question("Enter your user id: ");
    const _userPin: number = parseInt(question("Enter your pin id: "));
    if (_userId === userId && _userPin === userPin) {
      valid = true;
      break;
    }
  }

  if (valid) {
    console.log("Welcome to the ATM!");

    balance = Math.floor(Math.random() * 10000);

    const service: number = parseInt(question("Enter service number: "));

    switch (service) {
      case 1:
        console.log("Your balance is: $" + balance);
        break;

      case 2:
        const deposit: number = parseInt(question("Enter deposit amount: "));
        balance += deposit;
        console.log("Your new balance is: $" + balance);
        break;

      case 3:
        const withdraw: number = parseInt(question("Enter withdraw amount: "));
        balance -= withdraw;
        console.log("Your new balance is: $" + balance);
        break;
      case 4:
        console.log("Goodbye!");
        process.exit(0);
    }

    console.log("Thank you for using our ATM!");
  } else {
    console.log("You have been blocked!");
  }
}

main();
//Helpers
