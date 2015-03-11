/* Example to model init,set, get, change event */

var Todo = Backbone.Model.extend({
	defaults: {
    title: 'default -do something',
    completed: false
  	},
	initialize:function () {
		console.log('new model initialized');
	}
});

//Init with default values
var todo1 = new Todo();
console.log(todo1.toJSON());

//Set value
todo1.set("title", "read book");
console.log(todo1.toJSON());

/* model instance specific trigger */
var todo2 = new Todo({
  title: 'Buy Milk',
  completed: false
});

todo2.on("change:title", function() {
	console.log('Title changed for todo2' + this.get('title'));
});

todo2.set({"title":'Buy Rice'});
//todo2.set({"title":'Buy Rice'}, {silent: true});
