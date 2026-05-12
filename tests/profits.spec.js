import { yearlyProfitCalculator } from "../src/profits.js";

function test1() {
  const amount = 1000;
  const interestRate = 10;

  const expectedValue = 81;

  const actualValue = yearlyProfitCalculator(amount, interestRate);
  console.log(actualValue);

  if (expectedValue === actualValue) {
    console.log("Test 1 passed");
  }
}
test1();
