import { division } from "../src/division.js";

function test1() {
  const a = 42;
  const b = 6;
  const expectedResult = 7;

  const actualResult = division(a, b);

  if (actualResult === expectedResult) {
    console.log("Test 1 passed");
  }
}
test1();
