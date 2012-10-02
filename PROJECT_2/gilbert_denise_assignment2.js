/* Denise M. Gilbert
 * SDI 1210
 * October 6, 2012
 * Project 2
 * Christmas Preparation */

// Global Variables

var holidayName = "Christmas";
var treeType = "real";
var daysLeft = 83;
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
var willHost;

// Procedure

var startShopping = function (daysLeft) {  // Argument
    if (daysLeft <= 83) {  // Argument Conditional
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
    return willHost;  // Return Boolean
};

// Number Function

var sendChristmasCards = function (christmasCards) {  // Number Argument
    var cardsPrepared = 10;  // Local Variable
    while (christmasCards > 0) {  // While Loop
	    christmasCards = (christmasCards - cardsPrepared);  // Math
	    console.log("I have " + christmasCards + " Christmas cards remaining to sign and stamp.");  // Output
    };
    return christmasCards;  // Return Number
};

// String Function

var continueStory = function (holidayName, treeType) {  // Two String Arguments
    var goodies = "cookies";  // Local Variable
    console.log("I have a feeling this is going to be a very nice " + holidayName + ".  I think I may even have a " + treeType + " tree and bake several " + goodies + "!");
    return goodies;  // Return String
};

// Array Function

var grabBag = function (giftBudget, guestNames) {  // Number and Array Arguments
    if ((giftBudget <= 200) || (guestNames.length >= 6)) {
	    console.log("My budget is rather limited this year.  We are going to do a grab bag for the adults.");
	    console.log("The adults will pull a grab bag name from a hat.");
    } else {
	    console.log("My budget is looking good.  I may even be able to do a few little extras this year.");
    };
    
    for (var i = 0; i < guestNames.length; i++) {  // For Loop, Local Variable, Math
	    if (guestNames[i] === "Damian") {
            guestNames.splice(i, 1);
            break;
	    };
	    console.log(guestNames[i] + " has pulled a grab bag name.");
    };
    return guestNames;  // Return Array
};

// Display Function Output

startShopping(daysLeft);
confirmedWithFamily(9, 7);
console.log("I enjoy the tradition of sending out Christmas cards.");
sendChristmasCards(50);
grabBag(200, guestNames);
console.log("Everyone has pulled a grab bag name from the hat.");
continueStory(holidayName, treeType);