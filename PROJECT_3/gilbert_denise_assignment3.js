/* Denise M. Gilbert
 * SDI 1210
 * Project 3
 * October 11, 2012
 * Continuation of Christmas Story*/

// Global Variables

var holidayName = "Christmas";
var giftListNames = ["Damian", "Scottie, Jr."];

// Method Procedure

var countDown = {
    holidayDay: 25,  // Number Property
    dayBefore: "Christmas Eve",  // String Property
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
    invitees: 9,  // Number Properties
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

// Accessor and Mutator Methods

var getToDoList = {
    toDoListItems: function (toDoList) {  // Object Argument
	    if (toDoList.listItems.length !== 0) {
		    console.log("I have started a to-do list and, so far, I have " + toDoList.listItems.length + " items on the list.  I better get moving!");
	    } else {
		    console.log("I have completed everything I need to prepare for the holiday.");
	    }
    },
    firstItem: function (toDoList) {  // Object Argument
	    var anotherListItem;
	    if (toDoList.listItems[0] !== null) {
		    anotherListItem = true;
		    console.log("The first item on my to-do list is to " + toDoList.listItems[0].listItem + ".");
	    } else {
		    anotherListItem = false;
		    console.log("There are no more items on my to-do list.");
	    }
	    return toDoList.listItems[0].listItem;  // Return String
    },
    alterList: function (toDoList) {  // Object Argument
	    delete toDoList.listItems[0];
	    var newToDoList = [];
	    for (var index in toDoList.listItems) {  // For-In Loop
		    if (toDoList.listItems[index]) {
			    newToDoList.push(toDoList.listItems[index]);
		    }
	    }
	    toDoList.listItems = newToDoList;
	    return newToDoList;  // Return Array
    },
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

// Method Function

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

// Another Accessor Method

var recipeBox = {
    recipeCard: [  // Array Property
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

// Another Method Procedure

var estimateCookieAmount = {
    countCookies: function (numberBaskets) {  // Number Argument
	    var i = 0;
	    var j = 0;
	    for (i = 1; i <= 1; i += 1) {  // Nested Loop
		    for (j = 1; j <= 3; j += 1) {
		    }
		    console.log("If I put three cookies in " + j + " basket(s).");
		    console.log("I will go through " + i + " dozen cookies.");
		    console.log("If I make " + numberBaskets + " baskets, I will need at least " + numberBaskets / j + " dozen cookies.");
	    }
    }
};

// Another Method Procedure

var childGiftList = {
    child1ListReady: true,  // Boolean Properties
    child2ListReady: true,
    child1: false,
    damiansGifts: {  // Object Properties
	    gift1: "bowling ball",
	    gift2: "bowling bag",
	    gift3: "bowling shoes"
    },
    scottiesGifts: {
	    gift1: "bike",
	    gift2: "roller skates",
	    gift3: "craft supplies"
    },
    childToBuyFor: function (giftListNames) {  // Array Argument
	    if ((this.child1 === true) && (giftListNames[0] === "Damian"))
	    {
		    if (this.child1ListReady === true)  // Nested Conditional
			    console.log("I have Damian's gift list prepared.  I need to start shopping for his gifts.  Today I will be shopping for a " + this.damiansGifts.gift1 + ".");
			    else
			    console.log("I need to call Damian's mom and obtain some more gift ideas.");
	    } else {
		    if (this.child2ListReady === true)  // Nested Conditional
			    console.log("I have Scottie Jr.'s gift list prepared.  I need to start shopping for his gifts.  Today I will be shopping for a " + this.scottiesGifts.gift1 + ".");
			    else
			    console.log("I need to call Scottie Jr.'s mom and obtain some more gift ideas.");
	    }
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

// Returned Values/Output

countDown.daysRemaining();
var myWillHost = confirmedWithFamily.contactGuests();
hostingHoliday.announce(myWillHost);
getToDoList.toDoListItems(toDoList);
getToDoList.firstItem(toDoList);
var remainingCards = christmasCards.addressCards();
var testReturn = christmasCards.addressCards();
console.log("I have " + testReturn + " Christmas cards remaining.");
getToDoList.alterList(toDoList);
var revisedToDoList = getToDoList.nextItem(toDoList);
console.log("The family is getting together next weekend.  I am going to " + revisedToDoList + " then.");
getToDoList.alterList(toDoList);
getToDoList.nextItem(toDoList);
var showRecipeCard = recipeBox.getRecipeCard("Kolaczki");
console.log(showRecipeCard);
estimateCookieAmount.countCookies(16);
getToDoList.alterList(toDoList);
getToDoList.nextItem(toDoList);
childGiftList.childToBuyFor(giftListNames);
continueStory.progress();