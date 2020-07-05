//Display Current Date at top of calender
var calenderDate = function() {
    var dateToday = moment().format("dddd, MMMM, Do, YYYY");
    $("#currentDay").text(dateToday);
    console.log('dateToday');
};