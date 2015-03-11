/* Example - Collection sort functions*/

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
var todos = new TodosCollection();
todos.comparator = 'title';

todos.add([
{id:1,title:'Read book'},
{id:2,title:'Buy Milk'},
{id:3,title:'Mobile bill'},
{id:4,title:'Credit card bill'},
{id:5,title:'EB bill'}
], {sort: false});

console.log(todos.toJSON());
todos.sort();
console.log(todos.toJSON());

