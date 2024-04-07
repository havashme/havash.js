/**
 * To push to git
 * 1. open terminal
 * 2. git add .
 * 3. git commit -m "payam ro inja benevis"
 * 4. git push origin main
 */


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
