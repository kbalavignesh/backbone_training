/*Example for model attributes validation */
var Student = Backbone.Model.extend({
	defaults: {
    name: '',
    age: 10
  	},
	initialize:function () {
		this.on("invalid", function(model,errors){
    		_.each(errors, function (error) {
				console.log(error);
    		}, this);			
		});
		
		this.on("change:age", function(){
			if (this.isValid()) {
  				console.log('hide errors');
			}		
		});		
	},
	validate:function (attrs) {
		var errors = [];
		if(attrs.age <= 10){
			errors.push({field:'age',message:' age should be above 10'});	
		}
		if(attrs.name == '') {
			errors.push({field:'name',message:' enter student name'});
		}
		return errors.length > 0 ? errors : false;
	}
});

var s1 = new Student();

s1.set("name", '');
s1.set("age", 10,{validate: true});

//s1.set("name", 'bala');
//s1.set("age", 11,{validate: true});
