// Write a program for Remove Duplicates from a string.

function removeduplicates(string) {
    let uniquestr = '';

    for (i = 0; i < string.length; i++) {
        if (uniquestr.indexOf(string[i], 0) === -1) { //straring from index zero it will search the character in string for first occurance starting from zero index
            uniquestr += string[i]    /*The indexOf method in JavaScript is
                                       used to search for the first occurrence of a specified value within a string.*/
        }
    }
    return uniquestr;

}
const str = "AAaaaaaaBBBBBbccckkkkkkAAAAooooIII";
const result = removeduplicates(str)
console.log("Original String:", str);
console.log("Unique String:", result);
console.log("Unique string length", result.length)