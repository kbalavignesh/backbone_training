var student = {
	"firstName": "Balavignesh",
	"lastName": "Kasinathan"
};

x = clone(student);
console.log(x);
x.firstName = "bala";

console.log(x);
console.log(student);


function clone(obj) {
    if(obj == null || typeof(obj) != 'object')
        return obj;

    var temp = obj.constructor(); // changed

    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            temp[key] = clone(obj[key]);
        }
    }
    return temp;
}