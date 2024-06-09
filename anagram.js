/* check two strings are anagrams-
Anagrams are words or phrases formed by rearranging the letters of 
another word or phrase, using all the original letters exactly once
eg :  "listen" and "silent" */

function anagram(str1, str2) {
    // creating a helping function 
    let normalize = (str) => {
        return str
            .replace(/[^a-zA-Z0-9]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('')
    }

    let expa1 = normalize(str1)
    let expb1 = normalize(str2)
    if (expa1 === expb1) {
        console.log(`'${str1}' & '${str2}' are Anagrams`)
    }
    else {
        console.log(`'${str1}' & '${str2}' are not Anagrams`)
    }

}
anagram("silent", "listen")
anagram("ji ho", "lo po")