


function generateDate() {

    var date = new Date();

    let timeBody = document.getElementById("time-body");

    let options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    let curTime = date.toLocaleTimeString([], options)

    timeBody.innerHTML = `<b>${curTime}</b>`;

}



//setInterval(function,time milliseconds)

let index = 1
setInterval(function(){
    generateDate();
}, 1000)

// Using Moment Library 

let _date = moment().format("MM-DD-YYYY")

console.log(_date)

let _date2 = moment("19970707", "YYYYMMDDh").fromNow()

console.log(_date2)

let past = moment("20200520","YYYYMMDD")

let future = past.add(50,'months')

console.log(future.format("ll"))