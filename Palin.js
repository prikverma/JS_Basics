//Program to find a number is Palindrome or not.
function palindromecheck(num) {
    let numstring = num.toString()
    let result = numstring.split("").reverse().join("")
    if (numstring === result) {
        console.log("Number is palindrome")
    }
    else {
        console.log("Number is not a palindrome")
    }
}
palindromecheck(121)