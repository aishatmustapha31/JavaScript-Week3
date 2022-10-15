
// Data Structure 

// Array of Numbers 
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let listObject = {
    0:1,
    1:2,
    2:3,
    3:4,
    4:5,
    5:6,
    6:7,
    7:8,
    8:9,
    9:10,
    length: 10
}

// Object 
let person = {
    name: 'JAmes Bond',
    age: 22,
    phone: '090887665554',
    salary: 55000
}

console.log(person['name'], listObject.length)
// Array of Objects 

let people = [
    { name: 'James Bond', age: 22, phone: '09087655', salary: 65000 },
    { name: 'Mike Tyson', age: 45, phone: '090876554', salary: 34000 },
    { name: 'Mary Jones', age: 32, phone: '09087655', salary: 76000 },
    { name: 'Fred Milles', age: 29, phone: '090876554', salary: 87000 },
]

// Array of String 

let names = ["James","Mike","Google","King"]


// Reducing Values 

// adding all the numbers in the list 

let answer1 = list.reduce(function(a,b){
    let result = a + b
   // console.log(a,b,result)
    return result
})

console.log("List Reduction =",answer1)

// Finding Min and MAx 

let min = list.reduce(function(a,b){
    return a < b ? a : b
})

// Maximum 

let max = list.reduce((a,b)=> (a > b)? a: b)

console.log(min, max)

// Mapping Values 
// Generating new Array from the old one

let paddedList = list.map((num)=>{
    let padded = `<li class="list-item">${num}</li>`
    return padded
})

console.log(paddedList)

let doubleList = list.map((num)=> num*2)

console.log(doubleList)


// Filtering Objects 

let oddNumbers = list.filter((num)=>{
      return (num % 2 !== 0)
}) 

console.log(oddNumbers)

let upperCaseNames = names.map((_name)=> _name.toUpperCase())

console.log(upperCaseNames)