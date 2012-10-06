/* Denise M. Gilbert
 * SDI 1210
 * Project 3
 * October 11, 2012
 * Continuation of Christmas Story*/

// Global Variables

var toDoList = {
    toDoListItems: [
	    {Go_Shopping: true},
	    {Gather_Recipies: true},
	    {Wrap_Presents: true},
	    {Get_Tree: true},
	    {Address_Christmas_Cards: true},
	    {Make_Stockings: true}
    ]
};
console.log(toDoList);
// Procedure

var getToDoList = function (toDoList) {
    if (toDoList.toDoListItems.length !== 0) {
	    console.log("I have several things left on my to do list.  I better get started!");
    } else {
	    console.log("I have completed everything I need to prepare for the holiday.");
    };
};

// Boolean Function

// Array Function

// Number Function

var getRecipes = function () {
    
};

// String Function

// Object Function

// Returned Values to Output

getToDoList(toDoList);