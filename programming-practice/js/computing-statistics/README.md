## Computing Statistics

Statistics is important in our field. When measuring response times or rendering times, it’s helpful to collect data so you can easily spot abnormalities. For example, the standard deviation helps you determine which values are outliers and which values are within normal ranges.

Write a program that prompts for response times from a website in milliseconds. It should keep asking for values until the user enters “done.”

The program should print the average time (mean), the minimum time, the maximum time, and the standard deviation.

To compute the average (mean)

Compute the sum of all values.

Divide the sum by the number of values.

To compute the standard deviation

Calculate the difference from the mean for each number and square it.

Compute the mean of the squared values.

Take the square root of the mean.

Example Output

Enter a number: 100

Enter a number: 200

Enter a number: 1000

Enter a number: 300

Enter a number: done

Numbers: 100, 200, 1000, 300

The average is 400.

The minimum is 100.

The maximum is 1000.

The standard deviation is 400.25.

**Constraints**

- Use loops and arrays to perform the input and mathematical operations.

- Be sure to exclude the “done” entry from the array of inputs.

- Be sure to properly convert numeric values to strings.

- Keep the input separate from the processing and the output.

**Challenges**

- Use functions called mean, max, min, and standardDeviation, which take in an array of numbers and return the results.

- Have the program read in numbers from an external file instead of prompting for the values.
