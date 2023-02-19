const prompt = require("prompt-sync")({ sigint: true });

function hello() {
  console.log(buildGreeting(promptForName(prompt)));
}

function promptForName(prompt) {
  return prompt("What is your name?");
}

function buildGreeting(name) {
  return `Hello, ${name}, nice to meet you.`;
}

module.exports = { promptForName, buildGreeting, hello };
