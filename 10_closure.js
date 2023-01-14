//Closure

let globalVariable = 100;
function outer(){ 
    let outerVariable = 200;
    let inner = function(){
        let innerVariable = 300;
        console.log("Inner function");
        console.log(globalVariable);
        console.log(outerVariable);
        console.log(innerVariable);
    }
    return inner;
}
//outer function+inner function first way
let returnValue = outer();
returnValue();
//second way to access function in inner function
//****************outer()();
