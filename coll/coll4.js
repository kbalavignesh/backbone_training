/* Example - Collection with Underscore functions*/

var Todo = Backbone.Model.extend({
	defaults: {
	 id: 0,
    title: 'default -do something',
    completed: false
  	}
  	//,
  //	initialize:function () {
  //		this.on("change:completed", function(){
  //			console.log(this.get('title')+ " completed event from model");
	//	});
	//}
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo,
  initialize:function () {
  	this.on('add', function (model) {
  		console.log(model.get('title') + " task added");
  	});
  	this.on('remove', function(model){
  		console.log(model.get('title') + " task removed");
  	});
   this.on('change:completed', function(model){
  		console.log(model.get('title') + " task completed event from collection");
  	});
   this.on('reset', function(todos, options){
   	console.log(todos);
   	console.log(options.previousModels);
  		console.log("all tasks removed");
  	});
  }
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

//todos.on("add", function(todo){
//	console.log(todo.get('title') + " added");
//});

//on add, event triggered
todos.add(todo1);
todos.add(todo2);


todos.add([
{id:3,title:'pay mobile bill'},
{id:4,title:'pay credit card bill'},
{id:5,title:'pay EB bill'},
]);


//iterate collection
//todos.forEach(function(model){
//  console.log(model.get('title'));
//});

//on remove, event triggered
//todos.remove(5);

//on change, event triggered
//var todo4 = todos.get(4);
//todo4.set('completed',true);

//reset event triggered
//todos.reset();
//console.log(todos.toJSON());