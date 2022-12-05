"use strict";

/**
 * Tests for the following functions. See README.md for more detail.
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

const randomBoolean = Boolean(Math.round(Math.random()));
const randomPositiveNumber = Math.ceil(Math.random() * 100);
const anotherRandomPositiveNumber = Math.ceil(Math.random() * 100);
const randomPositiveNumberString = Math.ceil(Math.random() * 100) + "";
const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1;
const randomFloatingNumber = Number((Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2));
const randomNegFloatingNumber = Number((-1 * Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2));
const exampleObject = {"firstName": "Grace", "lastName": "Hopper"};
const exampleArray = ['Grace Hopper', 'Ada Lovelace', 'Margaret Hamilton', 'Sandi Metz'];
const exampleString = "Grace Hopper";
const randomIndex = Math.floor(Math.random() * exampleArray.length);
const randomString = exampleArray[randomIndex];

describe('lowerCase', function () {
    it('should be a defined function', function () {
        expect(typeof lowerCase).toBe('function');
    });
    it('should return a string value if a string is passed', function () {
        expect(typeof lowerCase('BOB')).toBe('string');
        expect(typeof lowerCase("Bob")).toBe('string');
    });
    it('should return false when passed 0 as input', function () {
        expect(lowerCase(0)).toBe(false);
    });
    it('should return false when passed ' + randomNegativeNumber, function () {
        expect(lowerCase(randomNegativeNumber)).toBe(false);
    });
    it('should return false when passed ' + randomPositiveNumber, function () {
        expect(lowerCase(randomPositiveNumber)).toBe(false);
    });
    it('should return "grace hopper" when passed "Grace Hopper"', function () {
        expect(lowerCase(exampleString)).toBe('grace hopper');
    });
    it('should return false when passed the boolean ' + randomBoolean, function () {
        expect(lowerCase(randomBoolean)).toBe(false);
    });
    it('should return false when passed null as the input', function () {
        expect(lowerCase(null)).toBe(false);
    });
    it('should return false when passed an array', function () {
        expect(lowerCase(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function () {
        expect(lowerCase(exampleObject)).toBe(false);
    });
    it('should return false when no input is passed in as an argument', function () {
        expect(lowerCase()).toBe(false);
    });
});

describe('subtract', function () {
    it('should be a defined function', function () {
        expect(typeof subtract).toBe('function');
    });
    it('should return a number when passed two numbers', function () {
        expect(typeof (subtract(1, 2))).toBe('number');
    });
    it('should return 8 when passed 10 and 2', function () {
        expect(subtract(10, 2)).toBe(8);
    });
    it('should return ' + (randomPositiveNumber - 2) + ' when passed ' + randomPositiveNumber + ' and 2', function () {
        expect(subtract(randomPositiveNumber, 2)).toBe(randomPositiveNumber - 2);
    });
    it('should return ' + (randomPositiveNumber - anotherRandomPositiveNumber) + ' when passed ' + randomPositiveNumber + ' and ' + anotherRandomPositiveNumber, function () {
        expect(subtract(randomPositiveNumber, anotherRandomPositiveNumber)).toBe(randomPositiveNumber - anotherRandomPositiveNumber);
    });
    it('should return 100 when passed the numeric strings ("135","35").', function () {
        expect(subtract("135", "35")).toBe(100);
    });
    it('should return false when passed one numeric input and one non-number input', function () {
        expect(subtract("Bob", 2)).toBe(false);
    });
    it('should return false when no arguments are passed', function () {
        expect(subtract()).toBe(false);
    });
    it('should return false when passed non-numeric strings', function () {
        expect(subtract("Bob", "Jane")).toBe(false);
    });
    it('should return false when passed two true boolean arguments', function () {
        expect(subtract(true, true)).toBe(false);
    });
    it('should return false when passed two false boolean arguments', function () {
        expect(subtract(false, false)).toBe(false);
    });
    it('should return false when passed a true and a false argument', function () {
        expect(subtract(true, false)).toBe(false);
    });
    it('should return false when passed an array', function () {
        expect(subtract(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function () {
        expect(subtract(exampleObject)).toBe(false);
    });
});

describe('multiplyBy2', function () {
    it('should be a defined function', function () {
        expect(typeof multiplyBy2).toBe('function');
    });
    it('should return ' + (randomPositiveNumber * 2) + ' when passed a numeric value ' + randomPositiveNumber + ' as input', function () {
        expect(multiplyBy2(randomPositiveNumber)).toBe(randomPositiveNumber * 2);
    });
    it('should return the numeric value 8 when passed a numeric string "4" as input', function () {
        expect(multiplyBy2("4")).toBe(8);
    });
    it('should return ' + (randomNegFloatingNumber * 2) + ' when passed a numeric string of "' + randomNegFloatingNumber + '"', function () {
        expect(multiplyBy2(String(randomNegFloatingNumber))).toBe(randomNegFloatingNumber * 2);
    });

    it('should return ' + (randomNegativeNumber * 2) + ' when passed a numeric string of "' + randomNegativeNumber + '"', function () {
        expect(multiplyBy2(String(randomNegativeNumber))).toBe(randomNegativeNumber * 2);
    });
    it('should return ' + (randomFloatingNumber * 2) + ' when passed a floating number of ' + randomFloatingNumber, function () {
        expect(multiplyBy2(randomFloatingNumber)).toBe(randomFloatingNumber * 2);
    });
    it('should return ' + (randomFloatingNumber * 2) + ' when passed a numeric string of "' + randomFloatingNumber + '"', function () {
        expect(multiplyBy2(String(randomFloatingNumber))).toBe(randomFloatingNumber * 2);
    });
    it('should return false when passed null', function () {
        expect(multiplyBy2(null)).toBe(false);
    });
    it('should return false when passed a boolean value ' + randomBoolean, function () {
        expect(multiplyBy2(randomBoolean)).toBe(false);
    });
});

describe('getLowestNumber', function () {
    it('should be a defined function', function () {
        expect(typeof getLowestNumber).toBe('function');
    });
    it('should return a number when called with 3 numbers like getLowestNumber(1, 2, 3)', function () {
        expect(typeof getLowestNumber(1, 2, 3)).toBe('number');
    });
    it('should return 0 when passed the 3 arguments (0, 1, 2)', function () {
        expect(getLowestNumber(0, 1, 2)).toBe(0);
    });
    it('should return -10 when passed the arguments (-10, 0, 5).', function () {
        expect(getLowestNumber(0, -10, 5)).toBe(-10);
    });
    it('should return 2 when passed the arguments (2, 2, 2).', function () {
        expect(getLowestNumber(2, 2, 2)).toBe(2);
    });
    it('should return 3 when passed the arguments (3, 5, 5).', function () {
        expect(getLowestNumber(3, 5, 5)).toBe(3);
    });
    it(`should return ${randomPositiveNumber} when passed ${randomPositiveNumber}, 0, and ${randomNegativeNumber}`, function () {
        expect(getLowestNumber(randomNegativeNumber, 0, randomPositiveNumber)).toBe(randomNegativeNumber);
    });
    it('should return false when passed the arguments (1, 2, "x") because not all arguments are numbers.', function () {
        expect(getLowestNumber(1, 2, "x")).toBe(false);
    });
    it('should return false when passed the non-numeric arguments ("a", "b", "c")', function () {
        expect(getLowestNumber("a", "b", "c")).toBe(false);
    });
    it('should return false when called with no provided arguments', function () {
        expect(getLowestNumber()).toBe(false);
    });
    it('should return false when passed a single input made of an array', function () {
        expect(getLowestNumber(exampleArray)).toBe(false);
    });
    it('should return false when passed the boolean ' + randomBoolean, function () {
        expect(getLowestNumber(randomBoolean)).toBe(false);
    });
});

describe('isEvenlyDivisible', function () {
    it('should be a defined function', function () {
        expect(typeof isEvenlyDivisible).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isEvenlyDivisible(3, 3)).toBe('boolean');
    });
    it('should return false when passed 100 as input and 3 as the divisor', function () {
        expect(isEvenlyDivisible(100, 3)).toBe(false);
    });
    it('should return true when passed 100 as input and 2 as the divisor', function () {
        expect(isEvenlyDivisible(100, 20)).toBe(true);
    });
    it('should return true when passed ' + randomPositiveNumber + ' as input and divisor', function () {
        expect(isEvenlyDivisible(randomPositiveNumber, randomPositiveNumber)).toBe(true);
    });
    it('should return false when passed null as one of the arguments', function () {
        expect(isEvenlyDivisible(null, 3)).toBe(false);
        expect(isEvenlyDivisible(3, null)).toBe(false);
    });
    it('should return false when passed a non-numeric string as one of the arguments', function () {
        expect(isEvenlyDivisible(exampleString, 1)).toBe(false);
        expect(isEvenlyDivisible(1, exampleString)).toBe(false);

    });
    it('should return false when called with no arguments', function () {
        expect(isEvenlyDivisible()).toBe(false);
    });
});

describe('inBetween', function () {
    it('should be a defined function', function () {
        expect(typeof inBetween).toBe('function');
    });
    it('should return a boolean when passed in all numeric values', function () {
        expect(typeof inBetween(3, 0, 10)).toBe('boolean');
    });
    it('should return true when passed (5, 0, 10)', function () {
        expect(inBetween(5, 0, 10)).toBe(true);
    });
    it('should return false when passed the input ("20", 5, 50)', function () {
        expect(inBetween('20', 5, 50)).toBe(false);
    });
    it('should return true when passed the input (20, 5, 50)', function () {
        expect(inBetween(20, 5, 50)).toBe(true);
    });
    it('should return false when passed the input (' + randomBoolean + ', 5, 50)', function () {
        expect(inBetween(randomBoolean, 5, 50)).toBe(false);
    });
    it('should return true when passed the input (0,' + randomNegativeNumber + ', ' + randomPositiveNumber + ')', function () {
        expect(inBetween(0, randomNegativeNumber, randomPositiveNumber)).toBe(true);
    });
    it('should return false when passed the input null', function () {
        expect(inBetween(null)).toBe(false);
    });
    it('should return true when passed the input (10,' + randomNegFloatingNumber + ', ' + (randomFloatingNumber + 10) + ')', function () {
        expect(inBetween(0, randomNegFloatingNumber, randomFloatingNumber + 10)).toBe(true);
    });
});

describe('replace', function () {
    it('should be a defined function', function () {
        expect(typeof replace).toBe('function');
    });
    it('should return a string when passed all string values', function () {
        expect(typeof (replace("someString", "someString2", "someString3"))).toBe('string');
    });
    it('should return "Betty Hopper" when passed ("Grace Hopper", "Grace", "Betty")', function () {
        expect(replace(exampleString, "Grace", "Betty")).toBe("Betty Hopper");
    });
    it('should return false when passed (1, "1", "2")', function () {
        expect(replace(randomPositiveNumber, "1", "2")).toBe(false);
    });
    it('should return "200" when passed ("100", "1", "2")', function () {
        expect(replace("100", "1", "2")).toBe("200");
    });
    it('should return "1111" when passed ("0111", "0", "1")', function () {
        expect(replace("0111", "0", "1")).toBe("1111");
    });
    it('should return false when passed (null, "a", "b")', function () {
        expect(replace(null, "a", "b")).toBe(false);
    });
    it('should return "Bond, James Bond" when passed ("James Bond", "James", "Bond, James")', function () {
        expect(replace("James Bond", "James", "Bond, James")).toBe("Bond, James Bond");
    });
    it('should return false when passed no arguments', function () {
        expect(replace()).toBe(false);
    });
});

describe('addStringLengths', function () {
    it('should be a defined function', function () {
        expect(typeof addStringLengths).toBe('function');
    });
    it('should return a number when passed two strings', function () {
        expect(typeof (addStringLengths(exampleString, exampleString))).toBe('number');
    });
    it('should return 6 when passed ("code", "up")', function () {
        expect(addStringLengths("code", "up")).toBe(6);
    });
    it('should return ' + (exampleString.length + randomString.length) + ' when passed ("' + exampleString + '", "' + randomString + '")', function () {
        expect(addStringLengths(exampleString, randomString)).toBe(exampleString.length + randomString.length);
    });
    it('should return false when passed ("ranking", 1)', function () {
        expect(addStringLengths("ranking", 1)).toBe(false);
    });
    it('should return 36 when passed ("abcdefghijklmnopqrstuvwxyz", "0123456789")', function () {
        expect(addStringLengths("abcdefghijklmnopqrstuvwxyz", "0123456789")).toBe(36);
    });
    it('should return false when passed (null, null)', function () {
        expect(addStringLengths(null, null)).toBe(false);
    });
    it('should return false when passed (true, false)', function () {
        expect(addStringLengths(true, false)).toBe(false);
    });
    it('should return false when passed an array as an argument ([], "string")', function () {
        expect(addStringLengths([], "string")).toBe(false);
        expect(addStringLengths("string", [])).toBe(false);
    });
    it('should return 0 when passed ("", "")', function () {
        expect(addStringLengths("", "")).toBe(0);
    });
});

describe('convertHourToSec', function () {
    it('should be a defined function', function () {
        expect(typeof convertHourToSec).toBe('function');
    });
    it('should return a number when passed a positive number ' + randomPositiveNumber, function () {
        expect(typeof convertHourToSec(randomPositiveNumber)).toBe('number');
    });
    it('should return false when passed a negative number ' + randomNegativeNumber, function () {
        expect(convertHourToSec(randomNegativeNumber)).toBe(false);
    });
    it('should return 3600 when passed 1', function () {
        expect(convertHourToSec(1)).toBe(3600);
    });
    it('should return 7200 when passed "2"', function () {
        expect(convertHourToSec("2")).toBe(7200);
    });
    it('should return ' + (randomPositiveNumberString * 3600) + ' when passed "' + randomPositiveNumberString + '"', function () {
        expect(convertHourToSec(randomPositiveNumberString)).toBe(randomPositiveNumberString * 3600);
    });
    it('should return ' + (randomPositiveNumber * 3600) + ' when passed ' + randomPositiveNumber, function () {
        expect(convertHourToSec(randomPositiveNumber)).toBe(randomPositiveNumber * 3600);
    });
    it('should return ' + (randomFloatingNumber * 3600) + ' when passed ' + randomFloatingNumber, function () {
        expect(convertHourToSec(randomFloatingNumber)).toBe(randomFloatingNumber * 3600);
    });
    it('should return false when passed a boolean ' + randomBoolean, function () {
        expect(convertHourToSec(randomBoolean)).toBe(false);
    });
    it('should return false when passed null', function () {
        expect(convertHourToSec(null)).toBe(false);
    });
});

describe('calculateChange', function () {
    it('should be a defined function', function () {
        expect(typeof calculateChange).toBe('function');
    });
    it('should return a string when passed two numbers', function () {
        expect(typeof (calculateChange(7.50, 1.50))).toBe('string');
    });
    it('should return "$6.00" when passed 7.50 and 1.50', function () {
        expect(calculateChange(7.50, 1.50)).toBe("$6.00");
    });
    it('should return "$5.00" when passed 10 and 5', function () {
        expect(calculateChange(10, 5)).toBe("$5.00");
    });
    it('should return $' + (randomPositiveNumber - 1).toFixed(2) + ' when passed ' + randomPositiveNumber + ' and 1', function () {
        expect(calculateChange(randomPositiveNumber, 1)).toBe("$" + (randomPositiveNumber - 1).toFixed(2));
    });
    it('should return "$15.00" when passed "30" and 15', function () {
        expect(calculateChange("30", 15)).toBe("$15.00");
    });
    it('should return false when passed a boolean value', function () {
        expect(calculateChange(true, 32)).toBe(false);
        expect(calculateChange(32, false)).toBe(false);
    });

    it('should return false when passed a non-numeric string', function () {
        expect(calculateChange("Bob")).toBe(false);
    });
    it('should return false when passed an array', function () {
        expect(calculateChange(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function () {
        expect(calculateChange(exampleObject)).toBe(false);
    });
    it('should return false when called with no arguments', function () {
        expect(calculateChange()).toBe(false);
    });
});