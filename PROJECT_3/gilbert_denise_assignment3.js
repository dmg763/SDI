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
		    listItem: "Address Christmas Cards",
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



// String Function

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
// Returned Values to Output

prepTime.dayRemaining(79);
var myWillHost = confirmedWithFamily.contactGuests(9, 7);
console.log("It is " + myWillHost + " that I will be hosting " + holidayName + " this year.");
getToDoList.toDoListItems(toDoList);
var nextToDoListItem = checkToDoList.nextItem(toDoList);
console.log("I will begin to " + nextToDoListItem + ".");
sendChristmasCards.prepareCards(50, 10);

// console.log("It is " + findRecipes + " that I need to gather some cookie recipes.");