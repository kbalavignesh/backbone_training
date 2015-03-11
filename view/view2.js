var App = {};

var StudentView = Backbone.View.extend({
  //el: $('#students'),
  
  todoTpl: _.template( $("script.student-template").html()),

  events: {
  },

  render: function(stuData) {
  	var template = this.todoTpl( stuData );
   this.$el.html( template );
   return this;
  },
});

var Student = Backbone.Model.extend({
	default: {
		name: '',
		mark:0
	}
});
var Students = Backbone.Collection.extend({
	model: Student
});

var stuColl = new Students();

stuColl.add(
[{name: "Kavi",mark: 89},
{name: "Bala",mark: 34},
{name: "Shrini",mark: 45},
{name: "John",mark: 16}
]);

$( document ).ready(function() {
	var stuView = new StudentView({el: $('#students')});

	stuView.render(
		{
			listItems:stuColl.toJSON()
		});

});

