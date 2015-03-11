var counter = 0;
function add() {
    counter += 1;
    return counter;
}
add();
add();
add();
console.log(counter);

/* function add() {
	var counter = 0;
    counter += 1;
    return counter;
}
add();
add();
add();
console.log(add()); */	

/* var add = (function () {
	var counter = 0;
   return function () {
   		return counter += 1;
   }
})();

add();
add();
add();

console.log(add()); */
