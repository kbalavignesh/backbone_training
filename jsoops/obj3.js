if (typeof Object.beget !== 'function') {
	Object.beget = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}

var student = {
	"firstName": "Balavignesh",
	"lastName": "Kasinathan"
};

console.log(student);

var student1 = Object.beget(student);

console.log(student1);

//student1.firstName = 'test';

//console.log(student1);

//console.log(student);

//delete student1.firstName;

//console.log(student1);