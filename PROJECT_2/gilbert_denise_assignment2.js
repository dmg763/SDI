/* Denise M. Gilbert
 * SDI 1210
 * October 6, 2012
 * Project 2
 * Christmas Preparation */

// Global Variables

var holidayName = "Christmas";
var daysLeft = 83;
var guestNames = [
    " Jamie",
    " John",
    " Stephen",
    " Cassie",
    " David",
    " Darlene",
    " Jeff",
    " Damian",
    " Scottie Jr."
];

// Procedure

var prepTime = function (daysLeft) {  // Argument
    if (daysLeft <= 83) {  // Argument Conditional
	    console.log("Christmas is right around the corner.  I need to start preparing for the holiday.");  // Output If True
    } else {
	    console.log("I still have time to prepare for the Christmas holiday.");  // Output If False
    };
};

// Boolean Function

var confirmedWithFamily = function (invitees, confirmedGuests) {  // Two Arguments
    var willHost;
    if ((invitees > 2) && (confirmedGuests >= 4)) { // Comparison
	    willHost = true;
	    console.log("I have discussed the holiday with my family."); // Output If True
    } else {
	    willHost = false;
	    console.log("I have discussed the holdiay with my family.");  // Output If False
    };
    return willHost;  // Return Boolean
};

// Number Function

var sendChristmasCards = function (christmasCards) {  // Number Argument
    var cardsPrepared = 10;  // Local Variable
    while (christmasCards > 0) {  // While Loop
	    christmasCards = (christmasCards - cardsPrepared); // Math
	    console.log("I have prepared " + cardsPrepared + " Christmas cards.  I have " + christmasCards + " cards remaining to sign and stamp.");  // Output
    };
    return christmasCards;  // Return Number
};

// String Function

var continueStory = function (holidayName, treeType) {  // Two String Arguments
    var goodies = "cookies";  // Local Variable
    console.log("I have a feeling this is going to be a very nice " + holidayName + ".  I think I may even have a " + treeType + " tree and bake several " + goodies + ".");
    return goodies;  // Return String
};

// Array Function

var grabBag = function (giftBudget, guestNames) {  // Number and Array Arguments
    var adultGuests = guestNames;  //  Local Variable
    adultGuests.splice(7, 2);
    if (((giftBudget <= 200) || (adultGuests.length >= 6)) && !((giftBudget <= 200) && (adultGuests.length >= 6))) {
	    console.log("My budget is rather limited this year.  We are going to do a grab bag for the adults.");  // Output If True
	    console.log("The adults will pull a grab bag name from a hat.");
    } else {
	    console.log("My budget is looking good.  I may even be able to do a few little extras this year.");  // Output If False
    };
    for (var i = 0; i < adultGuests.length; i += 1) {  // For Loop, Math
	    console.log(adultGuests[i] + " has pulled a grab bag name.");
    };
    return adultGuests;  // Return Array
};

// Returned Values to Output

prepTime(daysLeft);
var myWillHost = confirmedWithFamily(9, 7);
console.log("It is " + myWillHost + " that I will be hosting Christmas this year.");
console.log("I enjoy the tradition of sending out Christmas cards.");
var cardsRemaining = sendChristmasCards(50);
console.log("I have " + cardsRemaining + " Christmas cards left to prepare.");
var grabBagParticipants = grabBag(250, guestNames);
console.log("My adult guests will be: " + grabBagParticipants + ".");
var continuation = continueStory("Christmas", "real");
console.log("Now I need to decide on what types of " + continuation + " I should bake!");