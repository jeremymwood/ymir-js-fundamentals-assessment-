# JavaScript Basics Assessment

## Core competencies assessed

- Reading and following directions
- Producing solutions that match the problem specification
- Using Git and working with GitHub
    - Cloning a git repository from GitHub
    - Creating your own branch
    - Committing and pushing work to a new branch on GitHub

- Programing fundamentals in JavaScript
    - Working with values, variables, and data types
    - Using assignment and comparision operators
    - Working with JS internal functions to make decisions and perform actions.
    - Using conditional logic to make decisions inside functions
    - Writing functions that take in inputs, process, and return outputs.
    

## Instructions

0. *Carefully* read *all* the instructions and problems before beginning your work.

1. Clone this repository to your local projects directory. If you're using IntelliJ, go to File->New->Project From Version Control->GitHub and then paste the clone address of this repo. The clone address of the repo is found by clicking the green "Clone or download" button on the repo's page.

1. Create a branch named `firstName-lastLastname` where `firstName` is your first name and `lastName` is your last name. In IntelliJ, go to VCS, then Git, then Branches, and click "+ New Branch" and name it accordingly.
     
1. Write your solutions to the problems presented below inside `solutions.js`.

1. Read the Testing instructions below.

1. Add, commit often (preferably every time you finish a problem), and only push your `firstName-lastName` branch to GitHub when an instructor tells you to.

## Problems

1. Define a function named `lowerCase` that takes in an input and returns that input as a string in all lower case letters. Returns false if the input passed is not a string.
        
        lowerCase('CODEUP')                 // codeup
        lowerCase('George WashingTon')      // george washington
        lowerCase(0)                        // false
        lowerCase(true)                     // false
        lowerCase('BoBby')                  // bobby
        lowerCase(null)                     // false
        lowerCase([1,2,3])                  // false
        lowerCase({fName: 'Bruce', lName: 'Wayne'})    // false

2. Write a function named `subtract` that takes in two inputs. If both inputs provided are numeric or numeric strings, `subtract` will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, `subtract` should return false.

        subtract(10, 2)                     // 8
        subtract(0, 0)                      // 0
        subtract(-4, 1)                     // -5
        subtract("10", 2)                   // 8
        subtract(5, true)                   // false
        subtract(true, false)               // false
        subtract("Monday", "Tuesday")       // false
        subtract()                          // false
   
1. Define a function named `multiplyBy2` that takes in an input and multiplies it by 2 if the input is numeric. If the input is Not A Number, then return false.

        multiplyBy2(2))                     // 4
        multiplyBy2("4"))                   // 8
        multiplyBy2("-5.5"))                // -11.0
        multiplyBy2(5.5))                   // 11
        multiplyBy2(null))                  // false
        multiplyBy2(true))                  // false
        multiplyBy2(false))                 // false

1. Write a function named `getLowestNumber` that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return `false`.

        getLowestNumber(1, 3, 2)            // 1
        getLowestNumber("0", 1, 2)          // 0
        getLowestNumber(9, 3, -20)          // -20
        getLowestNumber(2, 2, 2)            // 2
        getLowestNumber(2, 5, 5)            // 2
        getLowestNumber(1, 2, 'x')          // false
        getLowestNumber("a", "b")           // false
        getLowestNumber()                   // false
        
1. Define a function named `isEvenlyDivisible` that takes in two inputs: a numeric value and divisor. If the numeric value can be evenly divided by the divisor, then return true. Otherwise, return false.
        
        isEvenlyDivisible(100, 2)           // true
        isEvenlyDivisible("100", 3)         // false
        isEvenlyDivisible(150, 3)           // true
        isEvenlyDivisible(15.5, 5)          // false
        isEvenlyDivisible(5, 5)             // true
        isEvenlyDivisible("70", "7")        // true
        isEvenlyDivisible(null, 7)          // false
        isEvenlyDivisible(3, "three")       // false
        isEvenlyDivisible()                 // false
        
1. Define a function named `inBetween` that takes in three numeric inputs: a value, a low, and high. If the first numeric value is in-between the ranges of the low and high values, then return true. Otherwise, return false.
        
        inBetween(10, 0, 12)                // true
        inBetween(10, -20, 20)              // true
        inBetween(0, 1, 5)                  // false
        inBetween(4, 4, 10)                 // false
        inBetween("four", 0, 10)            // false
        inBetween("10", 0, 25)              // false
        inBetween(true, 0, 5)               // false
        inBetween(null, 0, 10)              // false
        inBetween(5.5, -3, 6.0)             // true
        
1. Write a function named `replace` that takes in three inputs. The first input is a string, the second input is the string that is to be replaced, the third is the string that you are replacing the second input with. Only replace the first occurrence of the matched string. Return the string with the newly replaced values. If the first input is not a string, return false.
        
        replace("codedown", "down", "up")   // codeup
        replace("linux", "linux", "unix")   // unix
        replace("aaa", "a", "b")            // baa
        replace("abcde", "e", "a")          // abcda
        replace(12345, "5", "6")            // false
        replace("1011", 0, "1")             // 1111
        replace(null, null, null)           // false
        replace()                           // false

1. Write a function named `addStringLengths` that takes in two inputs. If both inputs provided are strings, `addStringLengths` returns the sum after adding the length (number of characters) of both strings. If either or both inputs are not strings, return false.
    
        addStringLengths(1, 2)              // false
        addStringLengths("code", "up")      // 6
        addStringLengths("1 2 3", "4 5 6")  // 10
        addStringLengths("ranking", 1)      // false
        addStringLengths(null, null)        // false
        addStringLengths(true, false)       // false
        addStringLengths(["code", "up"], "rocks!")  // false
        addStringLengths("", ""));          // 0

1. Define a function named `convertHourToSec` that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, `convertHourToSec`, should return false.

        convertHourToSec(0)                 // 0
        convertHourToSec(1)                 // 3600
        convertHourToSec(1.5)               // 5400
        convertHourToSec(true)              // false
        convertHourToSec(-1)                // false
        convertHourToSec(null)              // false
        convertHourToSec("2")               // 7200

1. Write a function named `calculateChange` that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, `calculateChange` should return the change after subtracting the cost from the amount paid. The return should be in `$x.xx` format as a string. If either or both inputs are not numeric or numeric strings, `calculateChange` should return false.

        calculateChange(7.50, 1.50)         // $6.00
        calculateChange(10, 5)              // $5.00
        calculateChange("100", 50)          // $50.00
        calculateChange(10, true)           // false
        calculateChange([1, 2, 3], 10)      // false
        calculateChange("Codeup", 100)      // false
        calculateChange()                   // false


## Testing your work w/ automated tests

Open `assessment.html` in your browser. Jasmine will run tests on the code inside `solutions.js`. The first time you load assessment.html, you will see every test failing because `solutions.js` is empty to start. 

The automated tests provide immediate feedback as to whether or not your solutions solve the problems.

- Click on Spec List inside of `assessment.html` to see test results.

- If all the specs for `isNegative` function are green, then the provided solution is correct.

- Make sure that the functions inside `solutions.js` are not wrapped in an IFFE.

## How solutions will be graded

- Each problem is worth 10 points. Full points will be awarded if ALL unit tests pass for a given problem. Partial credit may be awarded at the discretion of the instructor.

## Hints
- If you have green tests and notice that everything is now completely red, it means you likely have a syntax error or a type error in your code. Those kinds of errors will keep all the code from executing properly.
- If you have a syntax error, type error, or reference error in a particular solution function, and it's time to commit and push your work, then comment out that function or the line of code with the error so that your other solutions will be appropriately graded.

- Consider this problem: 

> Write a function called `isBoolean` that takes in a value and returns `true` or `false` if the argument provided is a boolean data-type or not.
>
> `isBoolean("Dog")` should return `false` because a string is not a boolean
>
> `isBoolean(false)` should return `true` because only true and false are boolean values.

- When a problem says `return`, it means `return`, not `console.log`.

- When a problem says that a function will take in an input, then it means the function must be defined so that it takes in an argument as its input, rather than relying on variables defined outside the function.

The following example is incorrect because the function does not take in an argument. It's modifying a global variable, and that is not the same as accepting an input as an argument.

```js
var input = "Grace Hopper"
function isBoolean() {
    return typeof input == "boolean";
}
```

This is incorrect because the function doesn't return the output. Functions that do not have an explicit `return` statement return `undefined` by default.

```js
function isBoolean(input) {
    console.log(typeof input == 'boolean');
}
```

Correct solution:

```js
function isBoolean(input) {
    return typeof input == "boolean";
}
```


# ymir-js-fundamentals-assessment
# ymir-js-fundamentals-assessment
