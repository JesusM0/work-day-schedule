//Skirpping current time for now

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        nine: [],
        ten: [],
        eleven: [],
        twelve: [],
        one: [],
        two: [],
        three: [],
        four: [],
        five: [],
      };
    }
  
    // loop over object properties
    $.each(tasks, function(list, arr) {
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, list);
      });
    });
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

  loadTasks();