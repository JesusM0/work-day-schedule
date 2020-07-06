var currentDate = moment().format("dddd, MMMM Do");
var tasks = [];
//Skipping current time for now

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    $.each(tasks, function(time, task) {
      createTask(time, task);
})};

var createTask = function(paraTime, paraTask) {
  //Lets create a new, dynamic containter to house tasks
  var taskContainer = $("<div>")
    .addClass("col-md-10")
    .text(paraTask);

  var oriContainter = $("[data-time=" + paraTime + "]");

  tasks.push({time: paraTime, task: paraTask})
  $(oriContainter).replaceWith(taskContainer);
};

$("#workslots").on("click", ".task", function() {
  var workSummary = $(this).children(".synopsis")
    .text()
    .trim();

  var insertText = $("<textarea>").val(workSummary);
  $(this).children(".synopsis").replaceWith(insertText);
  insertText.trigger("focus");
});

$("#workslots").on("click", ".saveBtn", function() {
  var synopsis = $(this)
  .siblings(".task")
  .find("textarea")
  .val();

  var taskText = $("p")
  .addClass("synopsis")
  .text(synopsis);
  $(this).siblings(".task").find("textarea").replaceWith(taskText);
  saveTasks($(this)).siblings(".task");
});


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

loadTasks();