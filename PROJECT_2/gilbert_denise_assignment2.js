/* Denise M. Gilbert
 * SDI 1210
 * October 6, 2012
 * Project 2
 * Continuation of Working on Son's Company Website */

// Global Variables

var companyName = "Bulldog Construction";
var numberFonts = 3;
var fontNames = ["Arial", "Arial Black", "Cooper Black"];
var detailsConfirmed = false;
var fontsNeeded;

// Procedure

var beginProject = function (detailsConfirmed) {
    if (detailsConfirmed === true) {
	    console.log("I have collected all the necessary details to begin coding Stephen's Web site.");
    } else {
	    console.log("I need to gather more details to being coding Stephen's Web site.");
    };
};

// Boolean Function

var correctFonts = function (fontNames, numberFonts) {
    var fontsNeeded;
    if (fontNames.length === numberFonts) { // Comparison
	    fontsNeeded = true;
	    console.log("Stephen has supplied all of the fonts he would like to use for his Web site.");
    } else {
	    fontsNeeded = false;
	    console.log("Stephen needs to supply additional fonts he would like to use for his Web site.");
    };
    return (fontsNeeded);
};

// Number Function

// String Function

// Array Function

// Returned Values Into Console.log Output

beginProject(detailsConfirmed);
correctFonts(fontNames, numberFonts);