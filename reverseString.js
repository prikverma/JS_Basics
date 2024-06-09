// // Reverse a string
// function reverseString(str) {
//     let newstring = str.split("").reverse().join("")
//     console.log(newstring)

// }
// reverseString("Hello")

//Reverse a string using for loop
function restr(str) {

    let rstring = ""
    for (let i = str.length - 1; i >= 0; i--) {
        rstring += str[i]
    }
    console.log(rstring)
}
restr("ullooooo")