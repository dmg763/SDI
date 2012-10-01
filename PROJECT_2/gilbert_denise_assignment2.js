/* Denise M. Gilbert
 * SDI 1210
 * October 6, 2012
 * Project 2
 * Christmas Preparation */

// Global Variables

var giftBudget = 200;
var foodBudget = 100;
var christmasCards = 50;
var holiday = "Christmas";
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
var invitees = 9;
var confirmedGuests = 7;
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

var confirmedWithFamily = function (invitees, confirmedGuests) {
    if ((invitees > 2) && (confirmedGuests >= 4)) { // Comparison
	    willHost = true;
	    console.log("I have confirmed with my family and I will be hosting Christmas this year.");
    } else {
	    willHost = false;
	    console.log("I will not be hosting Christmas this year.");
    };
    return willHost;
};

// Number Function

var sendChristmasCards = function (christmasCards) {
    var cardsPrepared = 10;
    while (christmasCards > 0) {
	    christmasCards = (christmasCards - cardsPrepared);
	    console.log("I have " + christmasCards + " Christmas cards remaining to sign and stamp.");
    };
    return christmasCards;
};



// Output Functions

startShopping(daysLeft);
confirmedWithFamily(invitees, confirmedGuests);
console.log("I enjoy the tradition of sending out Christmas cards.");
sendChristmasCards(christmasCards);