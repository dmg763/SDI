/* Denise M. Gilbert
 * SDI 1210
 * Project 3
 * October 11, 2012
 * Continuation of Christmas Story*/

// Global Variables

var toDoList = {
    toDoListItems: [
	    {Go_Gift_Shopping: true},
	    {Go_Food_Shopping: true},
	    ["Gather Cookie Recipies", true],
	    {Wrap_Presents: true},
	    {Get_Tree: true},
	    {Address_Christmas_Cards: true},
	    {Make_Stockings: true}
    ]
};

// Procedure

var getToDoList = function (toDoList) {
    if (toDoList.toDoListItems.length !== 0) {
	    console.log("I have several things left on my to do list.  I better get started!");
    } else {
	    console.log("I have completed everything I need to prepare for the holiday.");
    };
};

// Boolean Function

var checkToDoList = function (toDoList) {
    var getCookieRecipes;
    if (toDoList.toDoListItems[2][1] === true) {
	    getCookieRecipes = true;
	    console.log("Gather Cookie Recipes is still on my to-do list.");
    } else {
	    getCookieRecipes = false;
	    console.log("Gather Cookie Recipes is no longer on my to-do list.");
    };
    return getCookieRecipes;
};

// Array Function

// Number Function

var getRecipes = function () {
    
};

// String Function

// Object Function

// Returned Values to Output

getToDoList(toDoList);
var findRecipes = checkToDoList(toDoList);
console.log("It is " + findRecipes + " that I need to gather some cookie recipes.");