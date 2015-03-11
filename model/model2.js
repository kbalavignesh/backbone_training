/*Example for model on change event */
var Todo = Backbone.Model.extend({
	defaults: {
    title: 'default -do something',
    completed: false
  	},
	initialize:function () {
   	this.on('change:completed', function(){
	   	if(this.get('completed') == true){
				console.log(this.get('title') + ' task completed'); 	
   		}
   	});
	}
});


var todo1 = new Todo();
todo1.set("title", "read book");

var todo2 = new Todo({
  title: 'Buy Milk',
  completed: false
});

todo1.set('completed',true);

//console.log(todo2.hasChanged());
todo2.set('completed',true);
//console.log(todo2.hasChanged());
