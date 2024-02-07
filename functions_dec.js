//1) Anonymous funciton: Function without name I have assigned to a add variable
// eg;
const add = function (x, y) {
    return x * y
}
console.log(add(2, 3))
///////////////////////////////////////////////////////////////////
//2) Arrow function _ function using fat operator
const divide = (e, y) => e / y;
console.log(divide(6, 3))
////////////////////////////////////////////////////////////////////
//3) normal function declaration :
function add2(r, t) {
    return r + t;
}
console.log(add2(2, 4))
////////////////////////////////////////////////////////////////////
//4) Constructor function are used to create and initialize objects
// Constructor fucntions are named with capital letter first
// it is a blueprint that we can to create a multiple object using new keyword
/*function Person(fist, last, age) {
//     this.firstName = fist;
//     this.lastName = last;
//     this.ageOfPerson = age;
 }*/
// or we can use like this 
class Person {
    constructor(fist, last, age) {
        this.firstName = fist;
        this.lastName = last;
        this.ageOfPerson = age;
    }
}

let person1 = new Person('Prik', 'Verma', 30)
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.ageOfPerson);
////////////////////////////////////////////////////////////////////

//5) IIFE( Immediately Invoked Function Expression): function that is called immediately after it is defined
(function () {
    console.log("This is immedialty invoked function expression");
})();
////////////////////////////////////////////////////////////////////
//6) Generators Function(use for iterator pattern or function): (it uses yield keyword)Regular functions return only one, single value (or nothing). Generators can return (“yield”) multiple values, one after another, on-demand.
function* generatorFX() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generatorFX();
console.log(gen.next().value);// it will print value only
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());// no more value so done: true
////////////////////////////////////////////////////////////////////
//7) . Annoymous function:  no specific name, use in callback function.
const num = [2, 4, 6, 8, 10]
const squareNum = num.map(function (q) {
    return q *= q
})
console.log(squareNum);
////////////////////////////////////////////////////////////////////
//8. Recursive function: A fucntion that calls itself during its own execution.
function recurison(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * recurison(n - 1)// it is recursive function call of the same function
    }
}
console.log(recurison(4))
////////////////////////////////////////////////////////////////////
// 9). Higher-Order function:  A function that takes one or more functions as an argument and/or returns a function.
function add1(a, b) {
    return a + b
}
function multi1(a, b) {
    return a * b
}

function calculate(funcName, a, b) {
    return funcName(a, b)
}
console.log('addition is' + " " + calculate(add1, 5, 4))
console.log('Multiplication is' + " " + calculate(multi1, 5, 4))

////////////////////////////////////////////////////////////////////
