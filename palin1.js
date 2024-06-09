// string is palindrome or not( we can convert a string into palindrome just use " ")
{
    function palin(str) {
        let normalizestr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() // Remove any non-alphanumeric characters if needed (e.g., spaces, punctuation(like , ? "" etc)).
        // reverse the string
        let newstr = normalizestr.split('').reverse().join('')
        if (newstr === normalizestr) {
            console.log("String is palindrome")
        } else {
            console.log("string is not palindrome")
        }


    }
}
palin("A man, a plan, a canal: Panama")
palin("race a car")
palin("126")