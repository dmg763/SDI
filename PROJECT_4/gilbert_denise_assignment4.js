/*Denise M. Gilbert
 *SDI Term 1210
 *Project 4
 *October 18, 2012
 *Utility Function Library*/

// String Functions

var validatePhoneNumber = function (string) {
    // Does a string follow a 123-456-7890 pattern like a phone number?
	    var isPhoneNumberPattern;
	    if (((string.indexOf("-") === 3) && ((string.lastIndexOf("-")) === 7)) && (string.length === 12)) {
		    isPhoneNumberPattern = true;
	    } else {
		    isPhoneNumberPattern = false;
	    }
	    return (isPhoneNumberPattern);
    };
var phoneNumber = validatePhoneNumber("123-456-7890");
console.log(phoneNumber);

var validateEmail = function (string) {
    // Does a string follow an aaa@bbb.ccc pattern like an email address?
    var isEmailPattern;
	if (((string.indexOf("@") !== -1) && (/\s+/g.test(string) === false) && ((string.lastIndexOf(".")) === (string.length - 4)))) {
		isEmailPattern = true;
	} else {
		isEmailPattern = false;
	}
	return (isEmailPattern);
};
var email = validateEmail("user@xyz.net");
console.log(email);

var validateURL = function (string) {
    // Does it start with http: or https:?
    var isURL,
	    isHttp = /^http:\/\//,
	    isHttps = /^https:\/\//;
    if ((((isHttp.test(string)) || (isHttps.test(string)))) && (/\s+/g.test(string) === false)) {
	    isURL = true;
    } else {
	    isURL = false;
    }
    return (isURL);
};

var testURL = validateURL("https://blahblahblah");
console.log(testURL);

var titleCaseString = function (string) {  // STILL NEED TO MAKE THIS WORK PROPERLY
    // Split into words, then uppercase the first letter of each word.
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

var testTitleCaseString = titleCaseString("my name is denise");
console.log("My new string will appear as: " + testTitleCaseString);

var changeSeparator = function (string, separator) {
    // Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" changes to: "a/b/c".
    var replaceSeparator = string.replace(/,/g, separator);
    return replaceSeparator;
};
var alterSeparator = changeSeparator("a,b,c", "/");
console.log(alterSeparator);

// Number Functions

var formatDecimalPlaces = function (number, decimalPlaces) {
    // Format a number to use a specific number of decimal places, as for money: 2.1 changes to: 2.10
    var alterDecimalPlaces = number.toFixed(decimalPlaces);
    return Number(alterDecimalPlaces);
};
var testFormatDecimalPlaces = formatDecimalPlaces(1.2345, 3);
console.log(testFormatDecimalPlaces);

/*fuzzyMatch: function () {
    // Fuzzy-match a number: is the number above or below a number within a certain percent?
	    return {};
    },*/

var daysDifference = function (date2, date1) {
    // Find the number of hours or days difference between two dates.  Note:  To be more precise the hours, minutes, and seconds can be added to the dates in the form of 00:01:00.
	    var futureDate = new Date(date2),
		    mostRecentDate = new Date(date1),
		    dayDifference = (futureDate.getTime() - mostRecentDate.getTime()),
		    seconds = Math.floor(dayDifference / 1000),
		    minutes = Math.floor(seconds / 60),
		    hours = Math.floor(minutes / 60),
		    days = Math.floor(hours / 24);
		return days;
    };

var testDaysDifference = daysDifference("December 25, 2012", "October 15, 2012");
console.log(testDaysDifference);

var actualValue = function (stringNumber) {
    // Given a string version of a number such as "42", return the value as an actual Number, such as 42.
    var numberValue = Number(stringNumber);
	return numberValue;
};

var testActualValue = actualValue("42");
console.log(testActualValue);

// Array Functions

var smallestValueGreater = function (array, number) {
    // Find the smallest value in an array that is greater than a given number.
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

var testSmallestValueGreater = smallestValueGreater([50, 10, 11.5, 45, 8, 26, 30, 19], 11);
console.log(testSmallestValueGreater);

var totalValueOfArray = function (array) {
    // Find the total value of just the numbers in an array, even if some of the items are not numbers.
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

var testTotalValueOfArray = totalValueOfArray(["A", 20, true, "B", 30, {a: 3}, "test", 450.5, "346", -100]);
console.log(testTotalValueOfArray);

var sortObjectsByKey = function (array, keyValue) {  // STILL NEED TO MAKE THIS WORK PROPERLY
    // Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] changes to: [{a:1},{a:2},{a:3}].
    var myNewArray,
	    i;
    for (i = 0; i < array.length; i += 1) {
	    if (array[i][0] === keyValue) {
		    myNewArray = array.sort();
	    }
    }
    return myNewArray;
};

var testSortObjectsByKey = sortObjectsByKey([{a: 2}, {a: 3}, {a: 1}], "a");
console.log("The new sorted array will appear as: " + testSortObjectsByKey + ".");