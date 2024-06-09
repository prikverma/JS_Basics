//Reverse the words 

const str = "big black bug bit a big black dog on";
function reverseWord(str) {
    let normalize = str.split(" ")
    console.log(normalize);// spliting string to words array
    let finalize = ''
    for (let i = 0; i < normalize.length; i++) {
        let str1 = normalize[i].split("").reverse().join("")
        finalize = finalize + " " + str1
    }
    console.log(finalize)
}
reverseWord(str)
