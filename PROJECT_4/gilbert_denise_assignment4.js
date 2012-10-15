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
var testPhoneNumberPattern = validatePhoneNumber("123-456-7890");
console.log("String Follows Phone Number Pattern: " + testPhoneNumberPattern);

var validateEmailAddress = function (string) {
    // Does a string follow an aaa@bbb.ccc pattern like an email address?
    //var noWhiteSpace = /\s+/;
    var isEmailPattern;
	if (((string.indexOf("@") !== -1) && (/\s+/g.test(string) === false) && ((string.lastIndexOf(".")) === (string.length - 4)))) {
		isEmailPattern = true;
	} else {
		isEmailPattern = false;
	}
	return (isEmailPattern);
};
var testEmailPattern = validateEmailAddress("user@xyz.net");
console.log("String Follows E-mail Pattern: " + testEmailPattern);

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
console.log("String Follows URL Pattern: " + testURL);

// NEED TO COMPLETE THE UPPERCASE FIRST LETTER OF EACH WORD FUNCTION

    /*titleCaseString: function () {
    // Split into words, then uppercase the first letter of each word.
	    return {};
    }
};*/

var changeSeparator = function (string, separator) {
    // Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" changes to: "a/b/c".
    var replaceSeparator = string.replace(/,/g, separator);
    return replaceSeparator;
};
var testChangeSeparator = changeSeparator("a,b,c", "/");
console.log("My new string will look like this: " + testChangeSeparator + ".");

// Number Functions

var formatNumberDecimalPlaces = function (number, decimalPlaces) {
    // Format a number to use a specific number of decimal places, as for money: 2.1 changes to: 2.10
    var alterDecimalPlaces = number.toFixed(decimalPlaces);
    return alterDecimalPlaces;
};
var testFormatNumberDecimalPlaces = formatNumberDecimalPlaces(1234.5, 2);
console.log("My new number will appear as " + testFormatNumberDecimalPlaces + ".");

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

var testDifferenceDates = daysDifference("December 25, 2012", "October 15, 2012");
console.log("Difference Between Two Dates: " + testDifferenceDates + " days.");

var stringNumberToActualValue = function (stringNumber) {
    // Given a string version of a number such as "42", return the value as an actual Number, such as 42.
    var numberValue = Number(stringNumber);
	return numberValue;
};

var testStringNumberToActualValue = stringNumberToActualValue("42");
console.log("The Number Value of the String: " + testStringNumberToActualValue + ".");

// Array Functions

/*var myArrayLibrary = {
    smallestValueGreaterThanGivenNumber: function () {
    // Find the smallest value in an array that is greater than a given number.
	    return {};
    },
    totalValueOfNumbersInArray: function () {
    // Find the total value of just the numbers in an array, even if some of the items are not numbers.
	    return {};
    },
    sortArrayObjectsByKey: function () {
    // Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] changes to: [{a:1},{a:2},{a:3}].
	    return {};
    }
};*/