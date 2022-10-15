
// Arrow Function 


// Version 1
let func1 = function(){
    console.log("Welcome")
}

func1()

// Alternative 
let func2 = ()=> console.log("Welcome 2")

func2()

// Version 2

let func3 = function(){
    return 55   
}

console.log(func3())

// Arraw function with one statement allways returns 

let func4 = ()=> 55

console.log(func4())


// Version 3 

let func5 = function (a,b){
    let val = a+ b
    return val 
}

let func55 = (a,b)=>{
    let val = a + b
    return val
}

console.log(func55(99,1))


//  Conditional 

let isRunning = true;
let _status = "Static"

if(isRunning == true){
     _status = "OnMotion"
}else{
    _status= "Static"
}

// Binary Operator + , - , * , /    
// They need two operands two perform on 
// let  y = x + z 

// Ternary Operator   ? :
let _status2 = (isRunning)? "OnMotion": "Static"

console.log(_status,_status2)
