//current date and time

let newdate = new Date()
let currentDate = newdate.toLocaleDateString()
let currentTime = newdate.toLocaleTimeString()
console.log(currentDate, currentTime);