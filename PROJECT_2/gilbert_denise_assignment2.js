/* Denise M. Gilbert
 * SDI 1210
 * October 6, 2012
 * Project 2
 * Christmas Preparation */

// Global Variables

var giftBudget = 200;
var foodBudget = 100;
var guestNames = [
    "Jamie",
    "John",
    "Stephen",
    "Cassie",
    "David",
    "Darlene",
    "Jeff",
    "Damian",
    "Scottie Jr."
];
var daysLeft = 85;
var willHost;

// Procedure
var startShopping = function (daysLeft) {
    if (daysLeft <= 85) {
	    console.log("Christmas is right around the corner.  I need to start preparing for the holiday.");
    } else {
	    console.log("I still have time to prepare for the Christmas holiday.");
    };
};

// Boolean Function

var confirmedWithFamily = function (invitees, confirmedGuests) {  // Two Arguments
    if ((invitees > 2) && (confirmedGuests >= 4)) { // Comparison
	    willHost = true;
	    console.log("I have confirmed with my family and I will be hosting Christmas this year.");  // Output If True
    } else {
	    willHost = false;
	    console.log("I will not be hosting Christmas this year.");  // Output If False
    };
    return willHost;
};

// Number Function

var sendChristmasCards = function (christmasCards) {  // Number Argument
    var cardsPrepared = 10;  // Local Variables
    while (christmasCards > 0) {  // While Loop
	    christmasCards = (christmasCards - cardsPrepared);  // Math
	    console.log("I have " + christmasCards + " Christmas cards remaining to sign and stamp.");  // Output
    };
    return christmasCards;  // Return Number
};

// String Function

// Array Function

var grabBag = function (giftBudget, guestNames) {  // Number and Array Argument
    var childGuests = 2;  // Local Variables
    for (var i = 0; guestNames.length > 0; i--) {  // For Loop
    };
};

// Output Functions

startShopping(daysLeft);
confirmedWithFamily(9, 7);
console.log("I enjoy the tradition of sending out Christmas cards.");
sendChristmasCards(50);