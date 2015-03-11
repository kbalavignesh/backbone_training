var empty_object = {};
console.log(empty_object);
var student = {
	"firstName": 'Balavignesh',
	"lastName": 'Kasinathan'
};

console.log(student["firstName"]);
console.log(student.firstName);

var age = student.age || 0;
console.log(age);

var flight = {
airline: "Oceanic",
number: 815,
departure: {
IATA: "SYD",
time: "2004-09-22 14:55",
city: "Sydney"
},
arrival: {
IATA: "LAX",
time: "2004-09-23 10:42",
city: "Los Angeles"
}
};

console.log(flight);