// Check if the number is Armstrong or not.
function isArmstrong(number) {
    let num = number.toString().split("")
    let order = num.length;
    let sum = num.reduce((acc, digits) => parseInt(acc) + Math.pow(parseInt(digits), order), 0)
    if (sum == number) {
        console.log(number + " Number is a Armstrong number")
    }
    else {
        console.log(number + " Number is not a Armstrong number")
    }
}
isArmstrong(153)