/*
program to find occurrence of each character.
*/

function occurrenceOfCharacter(word) {
    let normalize = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() // remove non alphanumeric characters , to lower case so that it will not repeat count for capital and small same letters
    let count = {} // empty object for count
    for (i = 0; i < normalize.length; i++) {
        let char = normalize[i]
        if (count[char]) { // check the value if it is true then it will increase value in object
            count[char]++
        } else {
            count[char] = 1
        }
    }
    for (let key in count) { // for..in loop is used to iterate in objects it will print values in different lines
        console.log(`${key}:${count[key]}`)
    }
    console.log(normalize.length)

}


let word = "Helloh Ii am a good boy"
occurrenceOfCharacter(word)
