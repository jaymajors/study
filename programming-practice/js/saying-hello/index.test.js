const { buildGreeting, promptForName } = require("./index");

test("greeting returns expected result", () => {
  expect(buildGreeting("Jason")).toBe("Hello, Jason, nice to meet you.");
});

test("prompt returns expected result", () => {
  var prompt = jest.fn((x) => "Jason");
  expect(promptForName(prompt)).toBe("Jason");
});
