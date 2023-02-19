import { Prompt } from "prompt-sync";
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

function promptForInput(displayText: string, prompt: Prompt) {
  return prompt(displayText);
}

enum PasswordStrength {
  VeryWeak,
  Weak,
  Strong,
  VeryStrong,
}

function passwordStrength(password: string) {
  const onlyNumbers = /^[0-9]+$/;
  const onlyLetters = /^[a-zA-Z]+$/;
  const lettersAndAtleastOneNumber = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]*$/;
  const lettersNumbersSpecial =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#*!^])[a-zA-Z0-9@#*!^]*$/;

  if (password.match(onlyNumbers)) {
    return PasswordStrength.VeryWeak;
  } else if (password.match(onlyLetters)) {
    return PasswordStrength.Weak;
  } else if (password.match(lettersNumbersSpecial)) {
    return PasswordStrength.VeryStrong;
  } else if (password.match(lettersAndAtleastOneNumber)) {
    return PasswordStrength.Strong;
  }
}

function printFriendlyPasswordMessage(
  password: string,
  strength: PasswordStrength
) {
  switch (strength) {
    case PasswordStrength.VeryWeak:
      console.log(`The password '${password}' is a very weak password`);
      break;
    case PasswordStrength.Weak:
      console.log(`The password '${password}' is a weak password.`);
      break;
    case PasswordStrength.Strong:
      console.log(`The password '${password}' is a strong password.`);
      break;
    case PasswordStrength.VeryStrong:
      console.log(`The password '${password}' is a very strong password`);
  }
}

function main() {
  printFriendlyPasswordMessage("1234", passwordStrength("1234"));
  printFriendlyPasswordMessage("Cool", passwordStrength("Cool"));
  printFriendlyPasswordMessage("Cool1", passwordStrength("Cool1"));
  printFriendlyPasswordMessage("Cool123#", passwordStrength("Cool123#"));
}

main();
