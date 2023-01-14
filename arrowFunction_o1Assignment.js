console.log(`1)Arrow Function with No argument and No return Value`);
console.log(`-----------------------------------------------------`);
let fun=()=>{
console.log(`Good Afternoon,Today is Monday`);
}
fun();
console.log(`-----------------------------------------------------`);
console.log(`2)Arrow Function with  argument and No return Value`);
console.log(`-----------------------------------------------------`);
let multiply=(num1,num2,num3=1)=>
{
    let totalMul=num1*num2*num3;
    console.log(`Multiplication by using arrow function=${totalMul}`);
}
multiply(5,5,2);
console.log(`Result of multiplication using default value`);
multiply(10,4);
console.log(`-----------------------------------------------------`);
console.log(`3)Arrow Function with  argument and  return Value`);
console.log(`-----------------------------------------------------`);

let add=(a,b,c,d,e)=>{
let sum=a+b+c+d+e;

return sum;

}
let sum1=add(100,100,200,349,756);
console.log(`a)Addition of Numbers:${sum1}`);

let total=add(100,100,200,349,756);
console.log(`b)Return value when Arrow function is Invoked:${total}`);
let stringReturn=add("I am ","learning ","ES6 ","features ","In depth");
console.log(`c)Third arrow fun invoked & result is:${stringReturn}`);
