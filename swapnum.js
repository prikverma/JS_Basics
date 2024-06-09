// swap variables not using temp var
function swapnum() {
    let a = 30
    let b = 40
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a)
    console.log(b)
}
swapnum()