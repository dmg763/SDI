/* Denise M. Gilbert
 * SDI 1210
 * Project 3
 * October 11, 2012
 * Continuation of Christmas Story*/

// Global Variables

var holidayName = "Christmas";

// JSON Data

var toDoList = {
    listItems: [
	    {
		    "listItem": "shop for and address Christmas cards",
		    "howMany": 50
	    },
	    {
		    "listItem": "have the adult family members pull grab bag names"
	    },
	    {
		    "listItem": "gather cookie recipes",
		    "howMany": 10,
		    "tins": 20
	    },
	    {
		    "listItem": "create a gift list"
	    },
	    {
		    "listItem": "decide on menu items"
	    },
	    {
		    "listItem": "decide on game(s) to play"
	    },
	    {
		    "listItem": "get a tree"
	    },
	    {
		    "listItem": "go gift shopping"
	    },
	    {
		    "listItem": "get a tree"
	    },
	    {
		    "listItem": "decorate house"
	    },
	    {
		    "listItem": "wrap presents"
	    },
	    {
		    "listItem": "make stockings",
		    "howMany": 2
	    },
	    {
		    "listItem": "go grocery shopping"
	    }
    ]
};

var guestList = {
    guestInfo: [
	    {
		    "name": "Jamie",
		    "isAdult": true,
		    "children": 1
	    },
	    {
		    "name": "John",
		    "isAdult": true
	    },
	    {
		    "name": "Stephen",
		    "isAdult": true,
		    "children": 1
	    },
	    {
		    "name": "Cassie",
		    "isAdult": true
	    },
	    {
		    "name": "David",
		    "isAdult": true
	    },
	    {
		    "name": "Darlene",
		    "isAdult": true
	    },
	    {
		    "name": "Jeff",
		    "isAdult": true
	    },
	    {
		    "name": "Damian",
		    "isAdult": false
	    },
	    {
		    "name": "Scottie Jr.",
		    "isAdult": false
	    }
    ]
};

// Method Procedure

var countDown = {
    holidayDay: 25,
    dayBefore: "Christmas Eve",
    daysRemaining: function () {
	    var xmasDay = new Date("December 25, 2012 00:01:00"),
		    today = new Date(),
		    dayDifference = (xmasDay.getTime() - today.getTime()),
		    seconds = Math.floor(dayDifference / 1000),
		    minutes = Math.floor(seconds / 60),
		    hours = Math.floor(minutes / 60),
		    days = Math.floor(hours / 24);
	    console.log("There are only " + days + " days remaining until December " + this.holidayDay + "th, 2012, the Christmas holiday.  I need to start preparing so I can be ready by " + this.dayBefore + "!");
    }
};

// Method Function

var confirmedWithFamily = {
    invitees: 9,
    confirmedGuests: 7,
    contactGuests: function () {
	    var willHost;
	    if ((this.invitees > 2) && (this.confirmedGuests >= 4)) {
		    willHost = true;
	    } else {
		    willHost = false;
	    }
	    return willHost;  // Return Boolean
    }
};

// Method Procedure

var hostingHoliday = {
    announce: function (myWillHost) {  // Boolean Argument
	    if (myWillHost === true) {
		    console.log("Since I love to entertain, I am excited to announce that I will be hosting the Christmas holiday this year.");
	    } else {
		    console.log("Unfortunately, I will not be hosting the Christmas holiday this year.");
	    }
    }
};

// Accessor Method

var getToDoList = {
    toDoListItems: function (toDoList) {  // Object Argument
	    if (toDoList.listItems.length !== 0) {
		    console.log("I have started a to-do list and, so far, I have " + toDoList.listItems.length + " items on the list.  I better get moving!");
	    } else {
		    console.log("I have completed everything I need to prepare for the holiday.");
	    }
    }
};

// Another Accessor Method

var checkToDoList = {
    nextItem: function (toDoList) {  // Object Argument
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

var christmasCards = {
    totalCards: 20,  // Number Properties
    cardsPrepared: 10,
    addressCards: function () {
	    while (this.totalCards > 0) {  // While Loop
		    this.totalCards = (this.totalCards - this.cardsPrepared);  // Math
		    console.log("I have addressed " + this.cardsPrepared + " " + holidayName + " cards.  I have " + this.totalCards + " cards remaining to sign and stamp today.");
	    }
	    return this.totalCards;  // Return Number
    }
};

// Mutator Method

var removeItemFromToDoList = {
    alterList: function (toDoList) {  // Object Argument
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
    nextItem: function (toDoList) {  // Object Argument
	    var anotherListItem;
	    if (toDoList.listItems[0] !== null) {
		    anotherListItem = true;
		    console.log("The next item on my to-do list is to " + toDoList.listItems[0].listItem + ".");
	    } else {
		    anotherListItem = false;
		    console.log("There are no more items on my to-do list.");
	    }
	    return toDoList.listItems[0].listItem;  // Return String
    }
};

// Another Accessor Method

var recipeBox = {
    recipeCard: [
	    {
		    name: "Famous Chocolate Chip",
		    ingredients: ["flour", "chocolate chips", "sugar", "butter"],
		    directions: "Directions to make Famous Chocolate Chip cookies."
	    },
	    {
		    name: "Kolaczki",
		    ingredients: ["flour", "fruit filling", "sugar", "butter"],
		    directions: "Directions to make Kolaczki."
	    },
	    {
		    name: "Snowballs",
		    ingredients: ["flour", "walnuts", "sugar", "butter"],
		    directions: "Directions to make Snowball cookies."
	    },
	    {
		    name: "Peanut Blossoms",
		    ingredients: ["flour", "Hershey\'s Kisses", "sugar", "butter"],
		    directions: "Directions to make Peanut Blossoms cookies."
	    }
    ],
    getRecipeCard: function (name) {  // String Argument
	    for (var i = 0 ; i < recipeBox.recipeCard.length; i += 1) {  // For Loop
		    if ((name !== undefined) && (name === "Kolaczki")) {
			    console.log("I have found my " + name + " recipe:");
			    break;
		    } else {
			    console.log("I cannot find my " + name + " recipe.");
			    break;
		    }
	    }
	    return recipeBox.recipeCard[1];  // Return Object
    }
};

// Method Procedure

var continueStory = {
    progressType: "much",  // String Properties
    holidayType: "spectacular",
    progress: function () {
	    console.log("I am making " + this.progressType + " progress on my to-do list.  I have a feeling this is going to be a " + this.holidayType + " Christmas!");
    }
};

// Another Method Procedure

var lastOne = {
    deptCode: 20,
    salary: 45000,
    bonus: 0,
    nestedConditional: function () { // Number Argument
	    if ((this.deptCode === 20) || (this.deptCode === 30))
	    {
		    if ((this.salary >= 35000) && (this.salary <= 79000))// Nested Conditional
			    bonus = 200;
			    else
			    bonus = 250;
	    }
	    else if ((this.deptCode === 10) || (this.deptCode === 40))
	    {
		if ((this.salary >= 45000) && (this.salary <= 109000))// Nested Conditional
			    bonus = 350;
			    else
			    bonus = 400;
	    }
	    console.log("Bonus is " + bonus);
    }
};

lastOne.nestedConditional();

// Nested Loop

var estimateCookieAmount = {
    countCookies: function () {
	    var i = 0;
	    var j = 0;
	    for (i = 1; i <= 1; i += 1) {
		    for (j = 1; j <= 3; j += 1) {
		    }
		    console.log("If I put three cookies in " + j + " basket(s).");
		    console.log("I will go through " + i + " dozen cookies.");
	    }
    }
};

// Returned Values to Output

countDown.daysRemaining();
var myWillHost = confirmedWithFamily.contactGuests();
hostingHoliday.announce(myWillHost);
getToDoList.toDoListItems(toDoList);
var nextToDoListItem = checkToDoList.nextItem(toDoList);
console.log("Today, I will start to " + nextToDoListItem + " so they will be ready to mail in a few weeks.");
var remainingCards = christmasCards.addressCards();
var testReturn = christmasCards.addressCards();
console.log("I have " + testReturn + " Christmas cards remaining.");
removeItemFromToDoList.alterList(toDoList);
var revisedToDoList = changeToDoList.nextItem(toDoList);
console.log("The family is getting together next weekend.  I am going to " + revisedToDoList + " then.");
removeItemFromToDoList.alterList(toDoList);
var revisedToDoList = changeToDoList.nextItem(toDoList);
var showRecipeCard = recipeBox.getRecipeCard("Kolaczki");
console.log(showRecipeCard);
estimateCookieAmount.countCookies();
removeItemFromToDoList.alterList(toDoList);
var revisedToDoList = changeToDoList.nextItem(toDoList);
continueStory.progress();