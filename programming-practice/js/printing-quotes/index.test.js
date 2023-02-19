const { promptForInput, getAuthorQuote } = require("./index");

test("prompt returns expected result", () => {
  var prompt = jest.fn((x) => "Jason");
  expect(promptForInput("Give it to me.", prompt)).toBe("Jason");
});

test("getAuthorQuote returns expected result", () => {
  const quote = "To be, or not to be";
  const author = "Bill";

  expect(getAuthorQuote(quote, author)).toBe(`${author} says, "${quote}"`);
});
