import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";
function main(): void {
  const firstStr: string = question("Enter the first number:\n");
  const operator: string = question("Enter the operator:\n");
  const secondStr: string = question("Enter the second number:\n");

  const validInput: boolean = isValidInput(firstStr, operator, secondStr);

  if (validInput) {
    const [first, second]: number[] = [Number(firstStr), Number(secondStr)];
    const result: number = calculate(first, operator as Operator, second);

    console.log(`${result} \n`);
  } else {
    console.log("\nInvalid input\n");
    main();
  }
}

function calculate(first: number, operator: Operator, second: number): number {
  switch (operator) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      return first / second;
  }
}

function isValidInput(
  first: string,
  operator: string,
  second: string
): boolean {
  return isNum(first) && isNum(second) && isOperator(operator);
}

function isOperator(operator: string): boolean {
  return ["+", "-", "*", "/"].indexOf(operator) !== -1;
}

function isNum(str: string): boolean {
  return !isNaN(Number(str));
}

main();
