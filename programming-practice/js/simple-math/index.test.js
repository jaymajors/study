const { promptForInput, calculate, createOutput } = require("./index");

test("prompt returns expected result", () => {
  var prompt = jest.fn((x) => "Jason");
  expect(promptForInput("Give it to me.", prompt)).toBe("Jason");
});

test("calcuate performs expected calculations", () => {
  const number1 = 8;
  const number2 = 2;

  const result = calculate(number1, number2);

  expect(result.sum).toBe(10);
  expect(result.diff).toBe(6);
  expect(result.product).toBe(16);
  expect(result.divide).toBe(4);
});

test("create ouuput generate expected result", () => {
  const number1 = 8;
  const number2 = 2;

  const result = createOutput(number1, number2);

  expect(result.sum).toBe(`${number1} + ${number2} = ${number1 + number2}`);
});
