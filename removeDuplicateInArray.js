// remove duplicate from array

let array = [1, 2, 3, 4, 4, 5, 12, 12]
//using high order function reduce we can use filter as well or Set() constructor for this
// using reduce method

let newArray = array.reduce((accu, currentvalue) => {
    if (!accu.includes(currentvalue)) {
        accu.push(currentvalue)
    }
    return accu
}, [])

console.log(newArray)

// Set constructor and spread operator ...arg

let newarr1 = new Set(array)
console.log('newarr1: ', [...newarr1]);





