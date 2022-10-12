
// Date is an Object   
// Create with new keyword 


// Creating Date Without Parameters 
let today = new Date()

// Creating Date with One Parameter

let day = 24 * 60 * 60 * 1000 
let hour = 60 * 60 * 1000
let minute = 1000 * 60 
let second = 1000 

// Milli-Seconds to Seconds 

let oneSeconds = 1000 // Milliseconds 


// Creating Date with one parameter 

let anotherDate = new Date(1665495542088)

console.log(anotherDate, today)

console.log(today.getTime())

// Creating Date with Two or More Parameters 
// new Date(year,month,day,hour,minute,seconds,milliseconds)

// day = 1 - 31 
// month = 0 -11 
// hour = 0 - 23
// minute = 0  - 59 
// seconds = 0 - 59 
// milliseconds = 0 - 999 

let someDay = new Date(1997,7-1,7)

console.log(someDay.toDateString())


//  Creating Date with string parameter 

let myDay = new Date("10-05-1966")

console.log(myDay.toDateString())

