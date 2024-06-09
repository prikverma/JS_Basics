//Factorial of a number
function factw(num) {
    let fact = 1
    if (num == 0) {
        console.log("factorial is 1")
    }
    else {
        for (let i = 1; i <= num; i++) {
            fact *= i
        }
        console.log(fact)
    }
}
factw(5)