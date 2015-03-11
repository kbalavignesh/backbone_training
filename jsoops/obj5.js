var MYAPP ={
	name: 'bala',
	showData : function () {
		console.log("this is method invocation " + this.name);
	}	
}

MYAPP.showData();
MYAPP.name = 'vignesh';
MYAPP.showData();


show1 = function(){
	console.log ("function invocation" + this.name);
};
show1();


//Invoking a Function with a Function Constructor
function Student(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}

var x = new Student("Kavi","Bala");
console.log(x.firstName);
