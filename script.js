/**
 * To push to git
 * 1. open terminal
 * 2. git add .
 * 3. git commit -m "payam ro inja benevis"
 * 4. git push origin main
 */


// function isPrime 
function isPrime(number){
    for(var i = 2; i < number; i++){
         if(number % i == 0)
             return false;
    }
          return true;
    function rangePrime(firstNum , lastNum){
        var result = [];
            for(var i = firstNum; i <= lastNum; i++){
                 if(isPrime(i) == true)
                     result.push(i)
            }
              return result;
        
        
// nested object
const person = {
    firstName : "havash",
    lastName : "j b",
      age   :  31,

    coding : function(){
        return "havash is coding ...";
    },
        grades : {
           math : 14.5,
           sport : 20,
          gometry : 17
        }
}

function helloWorld() {
    console.log("Hello World, My name is Havash.")
}

function jam(a, b) {
    return a + b
}

// its like setTimeout but simpler :) 😍😁
function runAfter(millis, callback) {
    setTimeout(callback, millis)
}

// its like setInterval but more simpler :)))
function runEvery(millis, callback) {
    setInterval(callback , millis)
}




module.exports = {
    helloWorld,
    jam,
    runEvery,
    runAfter
}
