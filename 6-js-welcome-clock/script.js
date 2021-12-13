let yourname = prompt("Enter yourname:")

let hello = document.querySelector("#name")
hello.innerHTML = "Hello, " + yourname + "!"

let DATEX = new Date().toLocaleTimeString()
let DAY = new Date().toLocaleDateString('en-us', {weekday: 'long'})
let postdate = document.querySelector("#date")

    postdate.innerHTML = `${DATEX} ${DAY}`
    
setInterval(() => {
    DATEX = new Date().toLocaleTimeString()
    postdate.innerHTML = `${DATEX} ${DAY}`
    }, 1000) 

