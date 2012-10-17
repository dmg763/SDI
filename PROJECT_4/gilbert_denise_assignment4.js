/*Denise M. Gilbert
 *SDI Term 1210
 *Project 4
 *October 18, 2012
 *Utility Function Library*/

var myLibrary = function () {

//  VALIDATE PHONE NUMBER

    var validatePhoneNumber = function (string) {
	    if (((string.indexOf("-") === 3) && ((string.lastIndexOf("-")) === 7)) && (string.length === 12)) {
		    return true;
	    } else {
		    return false;
	    }
    };

//  VALIDATE E-MAIL

    var validateEmail = function (string) {
    // /\s+/g tests for any white space in the string.
	    if (((string.indexOf("@") !== -1) && (/\s+/g.test(string) === false) && ((string.lastIndexOf(".")) === (string.length - 4)))) {
		    return true;
	    } else {
		    return false;
	    }
    };

//  VALIDATE URL (Does it start with http: or https:?)

    var validateURL = function (string) {
	    var isHttp = /^http:\/\//,  // Match http:\\ and https:\\ starting at the beginning of the string.
		    isHttps = /^https:\/\//;
	    if ((((isHttp.test(string)) || (isHttps.test(string)))) && (/\s+/g.test(string) === false)) {
		    return true;
	    } else {
		    return false;
	    }
    };

//  TITLE CASE STRING (Split into words, then uppercase the first letter of each word.)

    var titleCaseString = function (string) {  // STILL NEED TO MAKE THIS WORK PROPERLY
	    var splitString = string.split(" "),
		    newString,
		    i;
	    console.log(splitString);
	    for (i = 0; i < splitString.length; i += 1) {
		    newString = splitString[i][0].toUpperCase();
		    console.log(newString);
	    }
	    return newString;
    };

//  CHANGE SEPARATOR (Return a string with the first separator changed to the second.)

    var changeSeparator = function (string, separator) {
    // /,/g Catches all of the commas in the string that need to be replaced.
	    var replaceSeparator = string.replace(/,/g, separator);
	    return replaceSeparator;
    };

//  FORMAT DECIMAL PLACES (Format a number to use a specific number of decimal places.)

    var formatDecimalPlaces = function (number, decimalPlaces) {
	    var alterDecimalPlaces = number.toFixed(decimalPlaces);
	    return Number(alterDecimalPlaces);
    };

//  FUZZY MATCH (Is the number above or below a number within a certain percent?)

    var fuzzyMatch = function (firstNumber, secondNumber) {
	    var difference = firstNumber - secondNumber,
		    percentLarger = difference / secondNumber,
		    percentage = percentLarger * 100;
	    return percentage;
    };

//  DIFFERENCE BETWEEN TWO DATES (To be more precise the hours, minutes, and seconds can be added to the dates in the form of 00:01:00.)

    var daysDifference = function (date2, date1) {
	    var futureDate = new Date(date2),
		    mostRecentDate = new Date(date1),
		    dayDifference = (futureDate.getTime() - mostRecentDate.getTime()),
		    seconds = Math.floor(dayDifference / 1000),
		    minutes = Math.floor(seconds / 60),
		    hours = Math.floor(minutes / 60),
		    days = Math.floor(hours / 24);
	    return days;
    };

//  RETURN ACTUAL NUMBER VALUE OF A STRING NUMBER

    var actualValue = function (stringNumber) {
	    var numberValue = Number(stringNumber);
	    return numberValue;
    };

//  SMALLEST VALUE GREATER THAN A GIVEN NUMBER (Find the smallest value in an array that is greater than a given number.)

    var smallestValueGreater = function (array, number) {
	    var numbersFound = [],
		    greaterThanGivenNumber,
		    i;
	    for (i = 0; i < array.length; i += 1) {
		    if (array[i] > number) {
			    greaterThanGivenNumber = (array[i]);
			    numbersFound.push(array[i]);
			    numbersFound.sort();
		    }
	    }
	    return numbersFound[0];
    };

//  TOTAL VALUE OF NUMBERS IN AN ARRAY (Even if some items are not numbers.)

    var totalValueOfArray = function (array) {
	    var totalValue = 0,
		    grabNumbers,
		    i;
	    for (i = 0; i < array.length; i += 1) {
		    if ((array[i][0] === "0") ||
				    (array[i][0] === "1") ||
				    (array[i][0] === "2") ||
				    (array[i][0] === "3") ||
				    (array[i][0] === "4") ||
				    (array[i][0] === "5") ||
				    (array[i][0] === "6") ||
				    (array[i][0] === "7") ||
				    (array[i][0] === "8") ||
				    (array[i][0] === "9")) {
			    array.splice(i, 1);
		    }
		    grabNumbers = parseFloat(array[i]);
		    if (!isNaN(grabNumbers)) {
			    totalValue = totalValue + grabNumbers;
		    }
	    }
	    return totalValue;
    };

//  SORT OBJECTS WITHIN AN ARRAY BY KEY NAME

    var sortObjectsByKey = function (array, key) {  // STILL NEED TO MAKE THIS WORK PROPERLY
    // Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] changes to: [{a:1},{a:2},{a:3}].
	    var sortedArray,
		    i;
	    for (i = 0; i < array.length; i += 1) {
		    if (array[i][0] < array[i][1]) {
			    console.log(array[i][0]);
		    }
		    sortedArray = array.sort();
	    }
	    return sortedArray;
    };

    return {
	    "validatePhoneNumber": validatePhoneNumber,
	    "validateEmail": validateEmail,
	    "validateURL": validateURL,
	    "titleCaseString": titleCaseString,
	    "changeSeparator": changeSeparator,
	    "formatDecimalPlaces": formatDecimalPlaces,
	    "fuzzyMatch": fuzzyMatch,
	    "daysDifference": daysDifference,
	    "actualValue": actualValue,
	    "smallestValueGreater": smallestValueGreater,
	    "totalValueOfArray": totalValueOfArray,
	    "sortObjectsByKey": sortObjectsByKey
    };
};

var newLib = new myLibrary();

console.log("Is this a telephone number? " + newLib.validatePhoneNumber("123-456-7890"));
console.log("Is this an e-mail address? " + newLib.validateEmail("user@xyz.net"));
console.log("Is this a valid URL? " + newLib.validateURL("https://blahblahblah"));
console.log("My new string will appear as: " + newLib.titleCaseString("my name is denise"));
console.log("My string with the new separator will appear as: " + newLib.changeSeparator("a,b,c", "/"));
console.log("My reformatted number will appear as: " + newLib.formatDecimalPlaces(1.2345, 3));
console.log("The difference in the two numbers is: " + newLib.fuzzyMatch(10, 8) + "%");
console.log("The difference between the two dates is: " + newLib.daysDifference("December 25, 2012", "October 17, 2012") + " days.");
console.log("The actual number value of this string number is: " + newLib.actualValue("42"));
console.log("The smallest value greater than the given number in this array is: " + newLib.smallestValueGreater([50, 10, 11.5, 45, 8, 26, 30, 19], 11));
console.log("The total value of this array is: " + newLib.totalValueOfArray(["A", 20, true, "B", 30, {a: 3}, "test", 450.5, "346", -100]));
console.log("The sorted objects in this array will appear as: " + newLib.sortObjectsByKey([{a: 2}, {a: 3}, {a: 1}], "a"));