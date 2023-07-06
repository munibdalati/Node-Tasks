//1
console.log("hello world")

//2
console.log(process.argv);

//3
function Greeting(){
    console.log("hello world")
}
const myTimeout = setTimeout(Greeting, 2000);

//4
function displayHello(){
    console.log("hello again")
}
setInterval(displayHello, 2000);

//5
console.warn("Warning: Something went wrong");
