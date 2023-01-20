var displayDate = $('#currentDay')
var hourNow = moment().format("H")
var rightNow = moment().format("dddd, MMM Qo");

displayDate.text(rightNow)

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

$(".saveBtn").click(function () {
    var hour = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();
    localStorage.setItem(hour, task);
});