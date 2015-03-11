var todos =[
  { title: 'go to Belgium.', completed: false },
  { title: 'go to China.', completed: false },
  { title: 'go to Austria.', completed: true }
];

// iterate over values in array
todos.forEach(function(todo){
  console.log(todo.title);
});

var sortedByAlphabet = _.sortBy(todos, 'title');

console.log("Now sorted: ");

sortedByAlphabet.forEach(function(todo){
  console.log(todo.title);
});


var count = 1;
console.log(_.map(todos, function(todo){
  return count++ + ". " + todo.title;
}));



var titles = _.pluck(todos, 'title');
console.log(titles);


console.log(_.size(todos));

console.log(todos.length);


var byCompleted = _.groupBy(todos,'completed');
console.log(byCompleted);
