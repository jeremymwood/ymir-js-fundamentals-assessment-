"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * lowerCase()
 * subtract()
 * multiplyBy2()
 * getLowestNumber()
 * isEvenlyDivisible()
 * inBetween()
 * replace()
 * addStringLengths()
 * convertHourToSec()
 * calculateChange()
 */

// Define a function named lowerCase that takes in an input and returns that input as a string in all lower case letters. Returns false if the input passed is not a string.
//
// lowerCase('CODEUP')                 // codeup
// lowerCase('George WashingTon')      // george washington
// lowerCase(0)                        // false
// lowerCase(true)                     // false
// lowerCase('BoBby')                  // bobby
// lowerCase(null)                     // false
// lowerCase([1,2,3])                  // false
// lowerCase({fName: 'Bruce', lName: 'Wayne'})    // false
// Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.
//
// subtract(10, 2)                     // 8
// subtract(0, 0)                      // 0
// subtract(-4, 1)                     // -5
// subtract("10", 2)                   // 8
// subtract(5, true)                   // false
// subtract(true, false)               // false
// subtract("Monday", "Tuesday")       // false
// subtract()                          // false