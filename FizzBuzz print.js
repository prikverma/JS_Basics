/*
FizzBuzz - Print numbers from 1 to 100
- if a number is divisible by 3 print Fizz
- if a number is divisible by 5 print Buzz
- if a number is divisible by both 3 and 5 print FizzBuzz

*/

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}