/* Denise M. Gilbert
 * SDI 1210
 * October 6, 2012
 * Project 2
 * Christmas Preparation */

// Global Variables

var spendingBudget = 200;
var holiday = "Christmas";
var peopleToBuyFor = [
    "Jamie",
    "Stephen",
    "David",
    "Darlene",
    "Damian",
    "Scottie Jr."
];
var daysLeft = 85;
var invitees = 8;
var confirmedGuests = 6;
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
    if ((invitees > 2) && (confirmedGuests >= 4)) {
	    willHost = true;
	    console.log("I have confirmed with my family and I will be hosting Christmas this year.");
    } else {
	    willHost = false;
	    console.log("I will not be hosting Christmas this year.");
    };
    return willHost;
};

// Number Function





// Output Functions

startShopping(daysLeft);
confirmedWithFamily(invitees, confirmedGuests);
console.log(willHost);