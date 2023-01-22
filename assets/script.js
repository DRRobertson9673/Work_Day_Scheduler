// variables for the script
var displayDate = $('#currentDay')
var hourNow = moment().format("H")
var rightNow = moment().format("dddd, MMM Qo");

// displays the day and date
displayDate.text(rightNow)

// sets the colours for past, present and future to each time block and pulls any content from local storage
$(".time-block").each(function () {
    var blockHour = (this).id;
    if (blockHour < hourNow) {
        $(this).addClass("past")
    }
    else if (blockHour === hourNow) {
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }
    $(this).children(".description").val(localStorage.getItem((this).id));
})

// saves the content of the time block to local storage
$(".saveBtn").click(function () {
    var hour = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();
    localStorage.setItem(hour, task);
});