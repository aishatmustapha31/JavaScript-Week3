// Date Format
// You can format your date with toLocaleDateString Function
// It accepts two parameters local and options 

// The option values are  numeric , short , long 

let today = new Date()


let options = {
    weekday:'long',
  year:'numeric',
  month:'long',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
  second:'numeric'
}

console.log(today.toLocaleDateString([], options))
