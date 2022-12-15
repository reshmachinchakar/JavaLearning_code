
var num1,num2;

var calResult=function(num1,num2){

   
    var returnResult=(num1>num2 ?`${num1} is greater than ${num2}`:`${num2} is greater than ${num1}`);
    return returnResult;
   
}

console.log(`Greater value in between 100 and 200 is:   ${calResult(100,200)}`);
console.log(`Greater value in between 300 and 200 is:   ${calResult(300,200)}`);
console.log(`Greater value in between 10 and -10 is:    ${calResult(10,-10)}`);
console.log(`Greater value in between 800 and 899 is:   ${calResult(800,899)}`);

console.log(`===========Even Or Odd===========`);

var stringEvenOdd=function(value1){

    var even=(value1%2==0?` True`:`False`);
    return even;
}
console.log(`Given no. 29 is even: ${stringEvenOdd(29)}`);
console.log(`Given no. 44 is even: ${stringEvenOdd(44)}`);
console.log(`Given no. 0 is even: ${stringEvenOdd(0)}`);
console.log(`Given no. 101 is even: ${stringEvenOdd(101)}`);

console.log(`=========String Length Even or Odd=========`);

var stringLen=function(valueLen){

    var c=(valueLen.length % 2==0 ? `Even`:`odd`);
    return c;

}
console.log(` Length of string Javascript is:${stringLen("JavaScript")}`);
console.log(` Length of string Developer is:${stringLen("Developer")}`);
console.log(` Length of string Chrome is:${stringLen("Chrome")}`);


    