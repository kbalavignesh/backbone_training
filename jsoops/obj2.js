var student = {
	"firstName": "Balavignesh",
	"lastName": "Kasinathan"
};

x = student;

x.firstName = 'Bala';

console.log(student.firstName);


var a = {}, b = {}, c = {};

a.name = "test";

console.log(a.name);
console.log(b.name);
console.log(c.name);

var a = b = c = {};

a.name = "test";

console.log(a.name);
console.log(b.name);
console.log(c.name);