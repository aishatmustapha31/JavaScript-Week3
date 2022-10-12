// String Representation of Date 
// Dec, 12 1990
// December 12, 1990   10/05/22   

let today = new Date()

// toString()
console.log("toString "+today.toString())

//  toDateString()
console.log(" toDateString "+today.toDateString())

//  toDateString()
console.log(" toTimeString "+today.toTimeString())

//  toUTCString()
console.log(" toUTCString "+today.toUTCString())

//  toISOString()
console.log(" toISOString "+today.toISOString())


//  toLocaleDateString()
console.log("toLocaleDateString() "+ today.toLocaleDateString("en-US"))
