/*map():This method is use to create a new array from exisitng one by applying a 
function to each one of the elements of the array*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
let newarr = arr.map((e) => e * 2)
console.log(newarr)

/*reduce():This method applies a function against an accumulator and each element 
in the array (from left to right) to reduce it to a single output value.*/

let sum = arr.reduce((acc, num) => acc + num, 0)
console.log(sum)

/*filter():  this method creates a new array that pass the test implemented by
by the provided function. it will return array value which passes the implemented function*/
let filtarr = arr.filter((e) => e % 2 == 0)
console.log(filtarr)