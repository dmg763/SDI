/* Denise M. Gilbert
 * SDI 1210
 * Project 3
 * October 11, 2012
 * Continuation of Christmas Story*/

// Global Variables

var holidayName = "Christmas";
var cookieRecipes = [
	" Famous Chocolate Chips",
	" Kolaczki",
	" Snowballs",
	" Peanut Blossoms"
];
var cookieCost = 50;

// JSON Data

var toDoList = {
    listItems: [
	    {
		    listItem: "shop for and address Christmas cards"
	    },
	    {
		    listItem: "have the adult family members pull grab bag names"
	    },
	    {
		    listItem: "gather cookie recipes"
	    },
	    {
		    listItem: "create a gift list"
	    },
	    {
		    listItem: "go gift shopping"
	    },
	    {
		    listItem: "decide on menu items"
	    },
	    {
		    listItem: "go grocery shopping"
	    },
	    {
		    listItem: "wrap presents"
	    },
	    {
		    listItem: "get a tree"
	    },
	    {
		    listItem: "make stockings"
	    },
	    {
		    listItem: "select game(s) to play"
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
		    isAdult: false,
	    }
    ]
};

// Method Procedure

var getDaysRemaining = {
    daysRemaining: function (holidayDay, dayBefore) {
	    var xmasDay = new Date("December 25, 2012 00:01:00"),
		    today = new Date(),
		    dayDifference = xmasDay.getTime() - today.getTime(),
		    seconds = Math.floor(dayDifference / 1000),
		    minutes = Math.floor(seconds / 60),
		    hours = Math.floor(minutes / 60),
		    days = Math.floor(hours / 24);
	    console.log("There are only " + days + " days remaining until December " + holidayDay + "th, 2012, the Christmas holiday.  I need to start preparing so I can be ready by " + dayBefore + "!");
    }
};

// Method Function

var confirmedWithFamily = {
    contactGuests: function (invitees, confirmedGuests) {
	    var willHost;
	    if ((invitees > 2) && (confirmedGuests >= 4)) {
		    willHost = true;
	    } else {
		    willHost = false;
	    }
	    return willHost;  // Return Boolean
    }
};

var hostingHoliday = function (myWillHost) {
    if (myWillHost === true) {
	    console.log("Since I love to entertain, I am excited to announce that I will be hosting the Christmas holiday this year.");
    } else {
	    console.log("Unfortunately, I will not be hosting the Christmas holiday this year.");
    }
};

// Accessor Method

var getToDoList = {
    toDoListItems: function (toDoList) {
	    if (toDoList.listItems.length !== 0) {
		    console.log("I have started a to-do list and, so far, I have " + toDoList.listItems.length + " items on the list.  I better get moving!");
	    } else {
		    console.log("I have completed everything I need to prepare for the holiday.");
	    }
    }
};

// Object Argument

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
		    console.log("I have addressed " + cardsPrepared + " " + holidayName + " cards.  I have " + christmasCards + " cards remaining to sign and stamp.");
	    }
	    return christmasCards;  // Return Number
    }
};

// Mutator Method

var removeItemFromToDoList = {
    alterList: function (toDoList) {
	    delete toDoList.listItems[0];
	    var newToDoList = [];
	    for (var index in toDoList.listItems) {
		    if (toDoList.listItems[index]) {
			    newToDoList.push(toDoList.listItems[index]);
		    }
	    }
	    toDoList.listItems = newToDoList;
	    return newToDoList;  // Return Array
    },
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

var gatherCookieRecipes = function (cookieRecipes, neededRecipes) {
    if (cookieRecipes.length === neededRecipes) {
	    if (cookieCost === 50) {
		    console.log("I have all the cookie recipes I need and the budget to be able.");
	    } else {
		    console.log("I have all the cookie recipes I need.  Unfortunately, I do not have the budget to make them all.");
	    };
	
    } else {
	    if (cookieRecipes.length <= neededRecipes) {
		    console.log("So far I have cookie recipes for: " + cookieRecipes + ".");
	    } else {
		    console.log("I have a bit more room in my cookie budget.  I should gather some more " + cookieRecipes + ".");
	    };
    };
};

// String Function

var continueStory = {
    progress: function (progressType, holidayType) {
	    console.log("I am making " + progressType + " progress on my to-do list.  I have a feeling this is going to be a " + holidayType + " Christmas!");
	    return progressType;  // Return String
    }
};

// Returned Values to Output

getDaysRemaining.daysRemaining(25, "Christmas Eve");
var myWillHost = confirmedWithFamily.contactGuests(9, 7);
hostingHoliday(myWillHost);
getToDoList.toDoListItems(toDoList);
var nextToDoListItem = checkToDoList.nextItem(toDoList);
console.log("Today, I will start to " + nextToDoListItem + " so they will be ready to mail in a few weeks.");
var cardsRemaining = sendChristmasCards.prepareCards(30, 10);
console.log("I have " + cardsRemaining + " " + holidayName + " cards left to prepare.");
removeItemFromToDoList.alterList(toDoList);
var revisedToDoList = changeToDoList.nextItem(toDoList);
console.log("The family is getting together next weekend.  I am going to " + revisedToDoList + " then.");
removeItemFromToDoList.alterList(toDoList);
var revisedToDoList = changeToDoList.nextItem(toDoList);
gatherCookieRecipes(cookieRecipes, 10);
continueStory.progress("much", "spectacular");