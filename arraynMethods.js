// let arr = ["Mango", "Banana", "Grapes", "Tomato", "Human", "BigBoss"]
// //Push
// console.log(arr.push("Human", "Idli"))// it will push items to the original array and return the new length
// console.log(arr)
// //Pop
// console.log(arr.pop())// it is use to delete last element of the array and modified it(it will give last element)
// console.log(arr)
// let arr1 = [1, 2, 3, 4, 5]
// //shift
// arr1.shift() // it is use to remove first element in array.
// console.log(arr1)
// //unshift
// arr1.unshift(10, 8, 9) // it adds new element in the begining of the original array.
// console.log(arr1)
// //spilce
// arr.splice(0, 2, "Added")// it can be used to delete elements and add new element it will modify original array.
// console.log(arr)
// //slice
// let arr2 = arr.slice(0, 4)
// console.log(arr2)
// // concat
// let arr3 = ['Apple', 'Orange']
// let newarr3 = arr.concat(arr3)
// console.log(newarr3)
// //indexOf method
// console.log(arr3.indexOf("Apple"))
// //includes
// console.log(arr.includes("Human"))
// // forEach
// arr.forEach((element) => {
//     console.log(element.toUpperCase())
// })
// every(): it is use to very a certain conditions for all array elements it will return true if it matches if not false.
let narr = [2, 4, 8, 1, 24, 26, 28, 30]
console.log(narr.every((e) => e <= 30))
// some(): it is use for some elements. atleast 1
console.log(narr.some((e) => e % 2 === 0))
// find():  it returns the value of the first element that satisfies the provided testing function.
console.log(narr.find((e) => e % 2 === 0))
// reverse(): it will reverse the order of the element.

console.log(narr.reverse())

// sort() it will short in order
let proarr = narr.sort()
console.log(proarr)/*this is not a correct order of sorting as it will 
change value to string and give sort order after comparing there sequences of UTF - 16 ode unit values */
// correct way of sorting numeric array.
console.log(narr.sort((a, b) => a - b))
