console.log(function (x) {

})

function add(a, b) {
    return a + b;
}
console.log(add(3, 4))
// map(), reduce(), filter()
var marks = [23, 34, 89, 2, 23, 24]
console.log(marks.reduce((sum, marks) => sum + marks, 0
))
let newmarks = marks.map(sum => sum * 3)
console.log(newmarks)
let newm = newmarks.filter(newmarks => newmarks % 2 === 0)
console.log(newm)



