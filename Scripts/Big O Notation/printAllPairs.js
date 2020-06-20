function printAllPairs(n){
    for(var i = 0; i<=n; i++){
        for(var j = 0; j<n; j++){
            console.log(i,j);
        }
    }
}

var tm1 = performance.now()
printAllPairs(20)
var tm2 = performance.now()
console.log(`Time Elapsed: ${ (tm2 - tm1)/1000 } seconds.`)