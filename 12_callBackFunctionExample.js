console.log("Callback with arg functions");
let add = function (n1, n2){
    console.log(n1+n2);
}
let multiply = function (n1, n2){
    console.log(n1*n2);
}

function operation(callbackAdd, callbackMultiply) {
    console.log('operation');
    callbackAdd(5, 5);
    callbackMultiply(2, 2);
} 
operation(add, multiply);
