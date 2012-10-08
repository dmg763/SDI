/* Denise M. Gilbert
 * SDI 1210
 * Project 3
 * October 11, 2012
 * Continuation of Christmas Story*/

// Global Variables

var holidayDay = 25;
var holidayName = "Christmas";

// JSON Data

var toDoList = {
    listItems: [
	    {
		    listItem: "Address Christmas Cards"
	    },
	    {
		    listItem: "Have the Adults Pull Grab Bag Names"
	    },
	    {
		    listItem: "Create a Gift List"
	    },
	    {
		    listItem: "Go Gift Shopping"
	    },
	    {
		    listItem: "Decide on Menu Items"
	    },
	    {
		    listItem: "Go Grocery Shopping"
	    },
	    {
		    listItem: "Gather Cookie Recipes"
	    },
	    {
		    listItem: "Wrap Presents"
	    },
	    {
		    listItem: "Get a Tree"
	    },
	    {
		    listItem: "Make Stockings"
	    }
    ]
};

var guestList = {
    guestInfo: [
	    {
		    name: "Jamie",
		    isAdult: true,
	    },
	    {
		    name: "John",
		    isAdult: true,
	    },
	    {
		    name: "Stephen",
		    isAdult: true,
	    },
	    {
		    name: "Cassie",
		    isAdult: true,
	    },
	    {
		    name: "David",
		    isAdult: true,
	    },
	    {
		    name: "Darlene",
		    isAdult: true,
	    },
	    {
		    name: "Jeff",
		    isAdult: true,
	    },
	    {
		    name: "Damian",
		    isAdult: false,
	    },
	    {
		    name: "Scottie Jr.",
		    isAdult: true,
	    }
    ]
};

// Method Procedure

var getDaysRemaining = {
    daysRemaining: function () {
	    var xmasDay = new Date("December 25, 2012 00:01:00"),
		    today = new Date(),
		    dayDifference = xmasDay.getTime() - today.getTime(),
		    seconds = Math.floor(dayDifference / 1000),
		    minutes = Math.floor(seconds / 60),
		    hours = Math.floor(minutes / 60),
		    days = Math.floor(hours / 24);
	    console.log("There are only " + days + " days remaining until December " + holidayDay + "th.  I need to start preparing for the " + holidayName + " holiday!");
    }
};

// Boolean Function

var confirmedWithFamily = {
    contactGuests: function (invitees, confirmedGuests) {
	    var willHost;
	    if ((invitees > 2) && (confirmedGuests >= 4)) {
		    willHost = true;
		    console.log("I have discussed the upcoming holiday with my family.");
	    } else {
		    willHost = false;
		    console.log("I have discussed the upcoming holiday with my family.");
	    }
	    return willHost;  // Return Boolean
    }
};

// Accessor Method

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
	    var anotherListItem;
	    if (toDoList.listItems[0] !== null) {
		    anotherListItem = true;
		    console.log("The first item on my to-do list is to " + toDoList.listItems[0].listItem + ".");
	    } else {
		    anotherListItem = false;
		    console.log("There are no more items on my to-do list.");
	    }
	    return toDoList.listItems[0].listItem;  // Return String
    }
};

// Number Function

var sendChristmasCards = {
    prepareCards: function (christmasCards, cardsPrepared) {
	    while (christmasCards > 0) {
		    christmasCards = (christmasCards - cardsPrepared);
		    console.log("I have prepared " + cardsPrepared + " " + holidayName + " cards.  I have " + christmasCards + " cards remaining to sign and stamp.");
	    }
	    return christmasCards;  // Return Number
    }
};

// Mutator Method

var removeItemFromToDoList = function (toDoList) {
    delete toDoList.listItems[0];
    var newToDoList = [];
    for (var index in toDoList.listItems) {
	    if (toDoList.listItems[index]) {
		    newToDoList.push(toDoList.listItems[index]);
	    }
    }
    toDoList.listItems = newToDoList;
    return newToDoList;  // Return Array
};

// Another Accessor Method

var changeToDoList = {
    nextItem: function (toDoList) {
	    var anotherListItem;
	    if (toDoList.listItems[0] !== null) {
		    anotherListItem = true;
		    console.log("The next item on my to-do list is to " + toDoList.listItems[0].listItem + ".");
	    } else {
		    anotherListItem = false;
		    console.log("There are no more items on my to-do list.");
	    }
	    return toDoList.listItems[0].listItem;
    }
};

// Array Function

var grabBag = {
    pullGrabBagNames: function (giftBudget, guestList) {
	    var adultGuests = guestList.guestInfo;
	    adultGuests.splice(7, 2);
	    if (((giftBudget <= 200) || (adultGuests.length >= 6)) && !((giftBudget <= 200) && (adultGuests.length >= 6))) {
		    /*console.log("My budget is rather limited this year.  We are going to do a grab bag for the adults.");
		    //console.log("The adults will pull a grab bag name from a hat.");
	    } else {
		    console.log("My budget is looking good.  I may even be able to do a few little extras this year.");*/
	    }
	    for (var i = 0; i < adultGuests.length; i += 1) {
		    console.log(adultGuests[i] + " has pulled a grab bag name.");
	    }
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

getDaysRemaining.daysRemaining();
var myWillHost = confirmedWithFamily.contactGuests(9, 7);
console.log("It is " + myWillHost + " that I will be hosting " + holidayName + " this year.");
getToDoList.toDoListItems(toDoList);
var nextToDoListItem = checkToDoList.nextItem(toDoList);
console.log("I will begin to " + nextToDoListItem + ".");
var cardsRemaining = sendChristmasCards.prepareCards(50, 10);
console.log("I have " + cardsRemaining + " " + holidayName + " cards left to prepare.");
removeItemFromToDoList(toDoList);
var revisedToDoList = changeToDoList.nextItem(toDoList);
console.log("The adults are all together.  I am going to " + revisedToDoList + " from a hat.");
var grabBagParticipants = grabBag.pullGrabBagNames(250, guestList);
//console.log("All of the adults (" + grabBagParticipants + ") have pulled a grab bag name.");
continueStory.upcomingEvents("cookies", "real");