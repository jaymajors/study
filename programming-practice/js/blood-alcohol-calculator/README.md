## Blood Alcohol Calculator

Sometimes you have to perform a more complex calculation based on some provided inputs and then use that result to make a determination.

Create a program that prompts for your weight, gender, number of drinks, the amount of alcohol by volume of the drinks consumed, and the amount of time since your last drink. Calculate your blood alcohol content (BAC) using this formula

BAC = ( A _ 5.14 / W _ r) - .015 \* H;

where

A is total alcohol consumed, in ounces (oz).

W is body weight in pounds.

r is the alcohol distribution ratio:

0.73 for men

0.66 for women

H is number of hours since the last drink.

Display whether or not it’s legal to drive by comparing the blood alcohol content to 0.08.

**Example Output**

Your BAC is 0.08
​
It is not legal for you to drive.

**Constraint**

- Prevent the user from entering non-numeric values.

**Challenges**

- Handle metric units.

- Look up the legal BAC limit by state and prompt for the state. Display a message that states whether or not it’s legal to drive based on the computed BAC.

- Develop this as a mobile application that makes it easy to record each drink, updating the BAC each time a drink is entered.
