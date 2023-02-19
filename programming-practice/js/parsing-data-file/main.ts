import { readFileSync } from "node:fs";

function readCsvFile(fileName: string) {
  const fileContents = readFileSync(fileName, "utf-8");
  const lines = fileContents.split("\n");

  const csv: string[][] = [];
  lines.forEach((line) => {
    const output = line.split(",");
    csv.push(output);
  });
  return csv;
}

function displayCsv(csv: string[][]) {
  let longestLast = 0;
  let longestFirst = 0;

  csv.forEach((row) => {
    longestLast = row[0].length > longestLast ? row[0].length : longestLast;
    longestFirst = row[1].length > longestFirst ? row[1].length : longestFirst;
  });

  console.log(
    `${padRight("Last", longestLast + 1)} ${padRight(
      "First",
      longestFirst
    )} Salary`
  );
  console.log(
    `${"-".repeat(longestLast + 2)}${"-".repeat(longestFirst + 2)}-------`
  );

  csv.forEach((row) => {
    console.log(
      `${padRight(row[0], longestLast + 1)} ${padRight(row[1], longestFirst)} ${
        row[2]
      }`
    );
  });
}

function padRight(value: string, size: number) {
  if (value.length <= size) {
    return value + " ".repeat(size - value.length);
  }
  return value;
}

const csvFile = readCsvFile("input.csv");
displayCsv(csvFile);
