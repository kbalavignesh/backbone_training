var todos = new Backbone.Collection();

todos.add([
  { title: 'go to Belgium.', completed: false },
  { title: 'go to China.', completed: false },
  { title: 'go to Austria.', completed: true }
]);

// iterate over models in the collection
todos.forEach(function(model){
  console.log(model.get('title'));
});

/*
var sortedByAlphabet = todos.sortBy(function (todo) {
    return todo.get("title").toLowerCase();
});

console.log("- Now sorted: ");

sortedByAlphabet.forEach(function(model){
  console.log(model.get('title'));
});
*/

/*
var count = 1;
console.log(todos.map(function(model){
  return count++ + ". " + model.get('title');
}));
*/

/*
var titles = todos.pluck('title');
console.log(titles);
*/

/*
console.log(todos.size());
console.log(todos.length);
*/

/*
var byCompleted = todos.groupBy('completed');
console.log(byCompleted);
*/