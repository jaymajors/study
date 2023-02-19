const prompt = require("prompt-sync")({ sigint: true });

const madLibs = [
  {
    madlib:
      "Do you {{verb}} your {{adjective}} {{noun}} {{adverb}}? That's hilarious!",
    noun: 1,
    verb: 1,
    adjective: 1,
    adverb: 1,
  },
  {
    madlib: "Where is the {{adjective}} {{noun}}?",
    noun: 1,
    verb: 0,
    adjective: 1,
    adverb: 0,
  },
];

function promptForInput(label, prompt) {
  return prompt(label);
}

function promptFor(promptString, count, prompt) {
  let inputs = [];
  for (let i = 0; i < count; i++) {
    inputs.push(promptForInput(promptString, prompt));
  }
  return inputs;
}

function replaceTemplate(madlib, regex, dictionary) {
  let index = 0;
  while (madlib.match(regex)) {
    madlib = madlib.replace(regex, dictionary[index]);
    index++;
  }
  return madlib;
}

function madlib(madlib, prompt) {
  const nouns = promptFor("Enter a noun: ", madlib.noun, prompt);
  const verbs = promptFor("Enter a verb: ", madlib.verb, prompt);
  const adjectives = promptFor("Enter a adjective: ", madlib.adjective, prompt);
  const adverbs = promptFor("Enter a adverb: ", madlib.adverb, prompt);

  const verbex = /{{verb}}/i;
  const nounex = /{{noun}}/i;
  const adjectiveex = /{{adjective}}/i;
  const adverbex = /{{adverb}}/i;

  let madlibStr = madlib.madlib.slice();
  madlibStr = replaceTemplate(madlibStr, verbex, verbs);
  madlibStr = replaceTemplate(madlibStr, nounex, nouns);
  madlibStr = replaceTemplate(madlibStr, adjectiveex, adjectives);
  madlibStr = replaceTemplate(madlibStr, adverbex, adverbs);

  return madlibStr;
}

console.log(madlib(madLibs[1], prompt));
