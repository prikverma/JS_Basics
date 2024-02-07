// imp loops
//1) for...of loop: used for modern JS
const a = [1, 2, 3, 4, 5, 6]
for (const e of a) {
    console.log(e)
}
// for...of loop on object: if need to use with array use arrayname[key].
const user = {
    name: "Prik",
    age: "30",
    city: "NY"
}
for (const key in user) {
    console.log(key + ":" + user[key])
}
//while loop and do while and for

let p = 8
while (p <= 10) {
    console.log(p)
    p++;
}

