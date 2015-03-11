/* Example - Rest fetch , save,  */

var Todo = Backbone.Model.extend({
	defaults: {
	 id:0,
    title: 'default -do something',
    completed: false
  	},
  	//urlRoot: '/backbone/todos.php',
  	url: function() {
  		return '/backbone/persistance/todos.php?id=' + encodeURIComponent(this.id)
  	}
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo,
  url: '/backbone/persistance/todos.php'
});

var todos = new TodosCollection();
 
todos.fetch({
		  data: {'query':'getAll'},
		  reset: true,
		  async:false,
        success: function (serverData) {
            console.log(todos.toJSON());
        }
});

var todo1 = todos.get(1);
todo1.destroy(
	{async:false}
);

console.log(todos.toJSON());