//Values of time.  Note that we have hr-1-5.  Remember that it is important!
var textareaVal9 = localStorage.getItem("hour-9");
var textareaVal10 = localStorage.getItem("hour-10");
var textareaVal11 = localStorage.getItem("hour-11");
var textareaVal12 = localStorage.getItem("hour-12");
var textareaVal1 = localStorage.getItem("hour-1");
var textareaVal2 = localStorage.getItem("hour-2");
var textareaVal3 = localStorage.getItem("hour-3");
var textareaVal4 = localStorage.getItem("hour-4");
var textareaVal5 = localStorage.getItem("hour-5");

// assign id's to to variables
var textarea9 = $("#hour-9");
var textarea10 = $("#hour-10");
var textarea11 = $("#hour-11");
var textarea12 = $("#hour-12");
var textarea1 = $("#hour-1");
var textarea2 = $("#hour-2");
var textarea3 = $("#hour-3");
var textarea4 = $("#hour-4");
var textarea5 = $("#hour-5");

// the values from local storage are displayed in th textarea by using id variables
textarea9.val(textareaVal9);
textarea10.val(textareaVal10);
textarea11.val(textareaVal11);
textarea12.val(textareaVal12);
textarea1.val(textareaVal1);
textarea2.val(textareaVal2);
textarea3.val(textareaVal3);
textarea4.val(textareaVal4);
textarea5.val(textareaVal5);

//Date function will then be saved as the following:  Day, Month, number of the day, and then the Year (4 digits)
var date = moment().format("dddd, MMMM Do, YYYY");

//Displays current day
$("#today").text(date);

// Time function
function time() {

    // With this function, it holds the current time, but only in hours to minimize the complexity
    var currentHour = moment().hours();

    console.log("Current hour of the day: " + currentHour);

    // function for each class block to ditermin is past, present, or future
    $(".block").each(function () {

        // With this function, what happens is that the var hour will equal to whatever parseInt is.  Since it's a number, hour is now a number.  We're going to use this number to go for all of the if and else settings.
        var hour = parseInt($(this).attr("id"));
        console.log(hour);

        //This triggers if the hour that was extracted is less than the current hour.  It's a past time, so this will be in grey
        if (hour < currentHour) {
            //This is adding a "class" function known as past.  Now with the class being equal to class, it'll then fill out to be grey, which will be our visual to be a past time  
            $(this).addClass("past");
        }

        //If the hour that we extracted equals the current hour, which was extracted from the time that is being looped currently, do the following:
        else if (hour === currentHour) {
            //With this block, remove the class that has "past" in the class.
            $(this).removeClass("past");
            //This function allows this particular block to add a "present" class function, which means that it would then transfer over to be "red" since the css has it set to red
            $(this).addClass("present");
        }

        //Last statement is if it's not in the past or present, then we are in the future
        else {
            
            $(this).removeClass("past");
            $(this).removeClass("present");
            //With this, add the "future" class, which would then cause the block to be green!
            $(this).addClass("future");
        }

    });

};

// Call the funtion time()
time();

/*With this, we're calling on the class "saveButton".  In the html, we have this:

<button class="col-md-1 btn saveButton saveBtn"><i class="fas fa-save"></i></button>

Since this is a class 

*/

/* Each button has its own functions.  With each row, it has its own textarea.  Such as, as an example, we have the "id=9 as the 9AM.  With this, it is targetting the textarea that was defined here.  With also this, we can now have that said button save ONLY to that row.  It is why you have 10 different saves" */
$(".saveButton").on("click", function (event) {
    // Holds the refresh so when the button is pressed again, it prevents
    event.preventDefault();
    // variable "textarea" holds the previous sibling of saveButton which is (textarea).
    var textarea = $(this).prev();
    //Have the attribute "id" hold the text
    var id = textarea.attr("id");
    //Makes the value saved from the text area
    var value = textarea.val();
    //Store both of these information as ID and Value so when refreshed, it'll save
    localStorage.setItem(id, value);
    //Again, this all holds its own values by storing information LINKED TO THE ROW.  
});
