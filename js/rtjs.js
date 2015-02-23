// Function to compare the width of the window and width of the table.
// Returns the number of non-fixed cells to display.

function runCalcs() {
    var browserWidth = $(window).width();
    var fullTableWidth = $(".responsiveTable").width();
    var sizedTable = shrinkTable(browserWidth);
}

function shrinkTable(x) {
    var colsWillFit = 0;
    var counter = 0;
        
}

$(document).ready(function() {
    runCalcs();
});