/* Example - Collection get by id */

var Todo = Backbone.Model.extend({
	defaults: {
	 id: 0,
    title: 'default -do something',
    completed: false
  	}
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo
});

var todo1 = new Todo({
  id: 1,
  title: 'Read book'
});

var todo2 = new Todo({
  id: 2,
  title: 'Buy Milk',
  completed: false
});

var todos = new TodosCollection();
todos.add(todo1);
todos.add(todo2);

console.log(todos.toJSON());

//console.log(JSON.stringify(todos));
var a = todos.get(2);
//console.log(a.toJSON());

//todos.remove(1);
console.log(todos.length);


todos.add([
{id:3,title:'pay mobile bill',completed:true},
{id:4,title:'pay credit card bill',completed:true},
{id:5,title:'pay EB bill',completed:false},
]);

console.log(todos.length);

