// Higher Order Function - 
function anotherFunction(){
    console.log("I am inside another function....");
    console.log("anotherfunction is an argument of show function");
}
function show(myNumber){ // myNumber is an argument
    myNumber();
    console.log("show function is a higher order function");
    let innerFunction = function(){
        console.log("Inner function.....");
        
     }
     return innerFunction;
}
 let inner = show(anotherFunction);
 inner();

console.log("---------------------------------------------");


let globalVar=300;
 function disp(){
 let innerDisp=100;
 console.log("It is high orderd function",innerDisp);
 console.log("It access globally",globalVar);

 let nestedFun=function()
 {
    let nestedValue=200;
  
    console.log("It is high orderd function",innerDisp);
    console.log("It is inner function",nestedValue);
    console.log("It access globally",globalVar);
 }
 return nestedFun;

 }
 console.log("It access globally",globalVar);

let returnVal=disp();
returnVal();