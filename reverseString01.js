/*
Reverse a string
*/
// 1 method is to use existing functions
function rverseString(str) {

    let normalize = str.replace(/[^a-zA-Z0-9]/g, '')
    let newStr = normalize.split('').reverse().join('')
    console.log(newStr)
}
rverseString("Hello ji")

//2 method is  to use emply string and add each charater by reverse iterating

function revstr(string) {
    let newst = ""
    for (i = string.length - 1; i >= 0; i--) {
        newst += string[i]
    }
    console.log(newst)
}
revstr("Prikshit")