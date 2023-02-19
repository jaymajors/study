import { readFileSync } from "node:fs";

function nameSorter(fileName: string) {
  const fileContents = readFileSync(fileName, "utf-8");
  return fileContents.split("\n").sort();
}

function displayNames(names: string[]) {
  console.log(`Total of ${names.length} names:`);
  console.log("--------------------");
  names.forEach((name) => {
    console.log(name);
  });
}

const sortedNames = nameSorter("input.txt");
displayNames(sortedNames);
