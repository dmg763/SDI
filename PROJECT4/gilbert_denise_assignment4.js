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
    var isEmailPattern;
	if (((string.indexOf("@") !== -1) && ((string.lastIndexOf(".")) === (string.length - 4)))) {
		isEmailPattern = true;
	} else {
		isEmailPattern = false;
	}
	return (isEmailPattern);
};
var testEmailPattern = validateEmailAddress("user@xyz.net");
console.log("String Follows E-mail Pattern: " + testEmailPattern);

    /*validateURL: function () {
    // Does it start with http: or https:?
	    return {};
    },
    titleCaseString: function () {
    // Split into words, then uppercase the first letter of each word.
	    return {};
    },
    changeSeparator: function () {
    // Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" changes to: "a/b/c".
	    return {};
    }
};

// Number Functions

var myNumberLibrary = {
    formatNumberDecimalPlaces: function () {
    // Format a number to use a specific number of decimal places, as for money: 2.1 changes to: 2.10
	    return {};
    },
    fuzzyMatch: function () {
    // Fuzzy-match a number: is the number above or below a number within a certain percent?
	    return {};
    },
    differenceBetweenTwoDates: function () {
    // Find the number of hours or days difference between two dates.
	    return {};
    },
    stringNumberToActualValue: function () {
    // Given a string version of a number such as "42", return the value as an actual Number, such as 42.
	    return {};
    }
};

// Array Functions

var myArrayLibrary = {
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