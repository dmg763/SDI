/* Denise M. Gilbert
 * SDI 1210
 * Project 3
 * October 11, 2012
 * Continuation of Christmas Story*/

// Global Variables

var holidayDay = 25;
var holidayName = "Christmas";
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

// JSON Data

var toDoList = {
    listItems: [
	    {
		    listItem: "Address Christmas Cards",
		    needToComplete: true,
	    },
	    {
		    listItem: "Have the Adults Pull Grab Bag Names",
		    needToComplete: true,
	    },
	    {
		    listItem: "Create a Gift List",
		    needToComplete: true,
	    },
	    {
		    listItem: "Go Gift Shopping",
		    needToComplete: true,
	    },
	    {
		    listItem: "Decide on Menu Items",
		    needToComplete: true,
	    },
	    {
		    listItem: "Go Grocery Shopping",
		    needToComplete: true,
	    },
	    {
		    listItem: "Gather Cookie Recipes",
		    needToComplete: true,
	    },
	    {
		    listItem: "Wrap Presents",
		    needToComplete: true,
	    },
	    {
		    listItem: "Get a Tree",
		    needToComplete: true,
	    },
	    {
		    listItem: "Make Stockings",
		    needToComplete: true,
	    }
    ]
};

// Procedure

var prepTime = {
    dayRemaining: function (daysLeft) {
	    if (daysLeft <= 79) {
		    console.log("December " + holidayDay + "th is right around the corner.  I need to start preparing for the " + holidayName + " holiday.");
	    } else {
		    console.log("I still have time to prepare for the " + holidayName + " holiday.");
	    }
    }
};

// Boolean Function

var confirmedWithFamily = {
    contactGuests: function (invitees, confirmedGuests) {
	    if ((invitees > 2) && (confirmedGuests >= 4)) {
		    willHost = true;
		    console.log("I have discussed the holiday with my family.");
	    } else {
		    willHost = false;
		    console.log("I have discussed the holiday with my family.");
	    }
	    return willHost;
    }
};

var getToDoList = {
    toDoListItems: function (toDoList) {
	    if (toDoList.listItems.length !== 0) {
		    console.log("I have started a to-do list and so far I have " + toDoList.listItems.length + " items.  I better get moving!");
	    } else {
		    console.log("I have completed everything I need to prepare for the holiday.");
	    }
    }
};

// Object Function

var checkToDoList = {
    nextItem: function (toDoList) {
	    if (toDoList.listItems[0] !== null) {
		    anotherListItem = true;
		    console.log("The first item on my to-do list is to " + toDoList.listItems[0].listItem + ".");
	    } else {
		    anotherListItem = false;
		    console.log("There are no more items on my to-do list.");
	    }
	    return toDoList.listItems[0].listItem;
    }
};

// Number Function

var sendChristmasCards = {
    prepareCards: function (christmasCards, cardsPrepared) {
	    while (christmasCards > 0) {
		    christmasCards = (christmasCards - cardsPrepared);
		    console.log("I have prepared " + cardsPrepared + " " + holidayName + " cards.  I have " + christmasCards + " cards remaining to sign and stamp.");
	    };
	    return christmasCards;
    }
};

// Array Function

var grabBag = {
    pullGrabBagNames: function (giftBudget, guestNames) {
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
    }
};


// String Function

var continueStory = {
    upcomingEvents: function (goodies, treeType) {
	    console.log("I have a feeling this is going to be a very nice " + holidayName + ".  I think I may even have a " + treeType + " tree and bake several " + goodies + ".");
	    return goodies;
    }
};

// Returned Values to Output

prepTime.dayRemaining(79);
var myWillHost = confirmedWithFamily.contactGuests(9, 7);
console.log("It is " + myWillHost + " that I will be hosting " + holidayName + " this year.");
getToDoList.toDoListItems(toDoList);
var nextToDoListItem = checkToDoList.nextItem(toDoList);
console.log("I will begin to " + nextToDoListItem + ".");
var cardsRemaining = sendChristmasCards.prepareCards(50, 10);
console.log("I have " + cardsRemaining + " " + holidayName + " cards left to prepare.");
console.log("TRY TO SET UP CODE TO RECALL THE CHECK TO DO LIST FUNCTION");
var grabBagParticipants = grabBag.pullGrabBagNames(250, guestNames);
console.log("All of the adults (" + grabBagParticipants + ") have pulled a grab bag name.");
continueStory.upcomingEvents("cookies", "real");