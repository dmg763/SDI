/* Denise M. Gilbert
 * SDI 1210
 * October 6, 2012
 * Project 2
 * Christmas Preparation */

// Global Variables

var holidayName = "Christmas";
var holidayDay = 25;
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

var prepTime = function (daysLeft) {
    if (daysLeft <= 83) {
	    console.log("December " + holidayDay + "th is right around the corner.  I need to start preparing for the " + holidayName + " holiday.");
    } else {
	    console.log("I still have time to prepare for the " + holidayName + " holiday.");
    };
};

// Boolean Function

var confirmedWithFamily = function (invitees, confirmedGuests) {
    var willHost;
    if ((invitees > 2) && (confirmedGuests >= 4)) {
	    willHost = true;
	    console.log("I have discussed the holiday with my family.");
    } else {
	    willHost = false;
	    console.log("I have discussed the holdiay with my family.");
    };
    return willHost;
};

// Number Function

var sendChristmasCards = function (christmasCards) {
    var cardsPrepared = 10;
    while (christmasCards > 0) {
	    christmasCards = (christmasCards - cardsPrepared);
	    console.log("I have prepared " + cardsPrepared + " " + holidayName + " cards.  I have " + christmasCards + " cards remaining to sign and stamp.");
    };
    return christmasCards;
};

// String Function

var continueStory = function (goodies, treeType) {
    console.log("I have a feeling this is going to be a very nice " + holidayName + ".  I think I may even have a " + treeType + " tree and bake several " + goodies + ".");
    return goodies;
};

// Array Function

var grabBag = function (giftBudget, guestNames) {
    var adultGuests = guestNames;
    adultGuests.splice(7, 2);
    if (((giftBudget <= 200) || (adultGuests.length >= 6)) && !((giftBudget <= 200) && (adultGuests.length >= 6))) {
	    console.log("My budget is rather limited this year.  We are going to do a grab bag for the adults.");
	    console.log("The adults will pull a grab bag name from a hat.");
    } else {
	    console.log("My budget is looking good.  I may even be able to do a few little extras this year.");
    };
    for (var i = 0; i < adultGuests.length; i += 1) {
	    console.log(adultGuests[i] + " has pulled a grab bag name.");
    };
    return adultGuests;
};

// Returned Values to Output

prepTime(83);
var myWillHost = confirmedWithFamily(9, 7);
console.log("It is " + myWillHost + " that I will be hosting "  + holidayName +  " this year.");
console.log("I enjoy the tradition of sending out " + holidayName + " cards.");
var cardsRemaining = sendChristmasCards(50);
console.log("I have " + cardsRemaining + " " + holidayName + " cards left to prepare.");
var grabBagParticipants = grabBag(250, guestNames);
console.log("My adult guests will be: " + grabBagParticipants + ".");
var continuation = continueStory("cookies", "real");
console.log("Now I need to decide on what types of " + continuation + " I should bake!");