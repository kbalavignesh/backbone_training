/* Example - Collection */

var Todo = Backbone.Model.extend({
	defaults: {
    title: 'default -do something',
    completed: false
  	}
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo
});

var todo1 = new Todo({
  title: 'Read book'
});

var todo2 = new Todo({
  title: 'Buy Milk',
  completed: false
});

var todos = new TodosCollection();
console.log("Collection size: " + todos.length);

todos.add(todo1);

todos.add(todo2);

console.log("Collection size: "+ todos.length);

console.log(todos);