// A function that sums all the numbers from 1 up to (and including) some number n 

// Function 1
function addUpTo(n){
    let total = 0;

    for (let i = 1; i <= n; i++){
        total = total + i
    }
    return total;
}

// Function 2
function addUpTo2(n){
    return n*(n+1)/2
}

var time1 = performance.now()
//addUpTo(1000000000)
addUpTo2(1000000000)
var time2 = performance.now()

console.log(`Time Elapsed: ${ (time2 - time1)/1000 } seconds.`)

//var num = addUpTo(4);
