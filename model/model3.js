/*Example for model attributes validation */
var Student = Backbone.Model.extend({
	defaults: {
    name: '',
    age: 10
  	},
	initialize:function () {
		this.on("invalid", function(model,error){
			console.log(this.get('name')+ error);
		});
	},
	validate:function (attrs) {
		if(attrs.age <= 10){
			return " age should be above 10";		
		}
		if(attrs.name == '') {
			return " enter student name";		
		}	
	}
});

var s1 = new Student();

s1.set("name", 'bala');
s1.set("age", 2,{validate: false});

console.log(s1.isValid());

//if (!s1.isValid()) {
//  console.log("check "+ s1.get("name") + " " + s1.validationError);
//}

