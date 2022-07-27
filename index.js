// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
      title: title,
      description: description,
      complete: false,
      logState: function() {
        console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
      },

      markCompleted: function() {
        this.complete = true;
      },
      };
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box");
const task2 = newTask("Do Laundry", "sad")
const tasks = [task1, task2]



// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way


// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

task1.logState();
task1.markCompleted();
task1.logState()

/*
logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
 */
