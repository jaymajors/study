
const prompt = require("prompt-sync")({ sigint: true })

function promptForInput(displayPrompt, prompt) {
    return prompt(displayPrompt);
}

function getAuthorQuote(quote, author){
    return `${author} says, "${quote}"`
}

function promptAndDisplayQuote() {
    console.log(getAuthorQuote(promptForInput("What is the quote? ", prompt), promptForInput("Who said it? ", prompt)));
}

module.exports = {promptForInput, getAuthorQuote, promptAndDisplayQuote}