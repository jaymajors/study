import {Prompt} from "prompt-sync";
import {compare} from 'bcrypt';
import userMap from './users'

const prompt: Prompt = require("prompt-sync")({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
    return prompt(displayText);
}

function promptForSensitiveInput(displayText: string, prompt: Prompt) {
    return prompt.hide(displayText);
}

async function main() {
    const userName = promptForInput("User Name: ", prompt);
    const password = promptForSensitiveInput("Password: ", prompt);
    const user = userMap.get(userName);
    if (user && await compare(password, user.password)) {
        console.log('Access Granted!');
    } else {
        console.log('Invalid user name / password');
    }
    console.log('Goodbye');
}

main();

