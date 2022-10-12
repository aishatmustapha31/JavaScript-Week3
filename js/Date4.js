// Date Operations 

let today = new Date()

let year = today.getFullYear()

let month = today.getMonth()

let day = today.getDate()
let hour = today.getHours()

let minute = today.getMinutes()
let seconds = today.getSeconds()

// console.log("Year ",year)
// console.log("Month ",month)
// console.log("Day ", day)
// console.log("Hour ",hour)
// console.log("Minutes ",minute)
// console.log("Seconds ",seconds)

// let dayToBeAdded = 40

// let currentDay = today.getDate()
// let newDay = currentDay + dayToBeAdded
// today.setDate(newDay)

console.log(today.toDateString())

let payDay = addDays(today, 50)

console.log("PAy Day "+payDay.toDateString())

let hiredDate = addDays(today,-200)

console.log("Hired Date ", hiredDate.toDateString())

let twoYear = 365 * 2

let twoYearsToDays = twoYear / 365


console.log("Two Year ",twoYear)

let nextTwoYears = addDays(today,twoYear)

console.log("NextTwoYears ", nextTwoYears.toDateString())

console.log(getFormatedStringFromDays(100))

function addDays(inputDate,daysToBeAdded){

    let dateValue = inputDate.getDate()
    let newDay = dateValue + daysToBeAdded
    inputDate.setDate(newDay)
    return inputDate

}

let day1 = new Date(2027,4,15)
let day1Utc = new Date(Date.UTC(1998,6,23))

let day2 = new Date(1996,4,05)

// Data Comparisom    
// You compare date with valueOf

console.log(day1.toDateString(),  day1.valueOf())

console.log(day2.toDateString(), day2.valueOf())

if( day1.valueOf() === day2.valueOf()){
    console.log("The two dates are equal")
}else if(day1.valueOf() > day2.valueOf()){
    console.log("Day1 is greater than Day 2")
}else{
    console.log("Day 1 is Less Than Day 2")
}


function getFormatedStringFromDays(numberOfDays) {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);

    var yearsDisplay = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
    var monthsDisplay = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
    var daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";
    return yearsDisplay + monthsDisplay + daysDisplay; 
}