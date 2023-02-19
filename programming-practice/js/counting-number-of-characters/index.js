const prompt = require('prompt-sync')({ sigint: true });

function promptForInput(promptStr, prompt) {
    return prompt(promptStr)
}

const input = promptForInput("What is the input string? ", prompt)
console.log(`${input} has ${input.length} characters`);