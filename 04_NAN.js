var result=0/0;
console.log(`Result is:${result}`);
console.log(`Type of NAN:${result} is ${typeof result}`);

//NAN is invalid number.and its type of number

var resultMultiply=result*10;
console.log(`resultMultiply is: ${resultMultiply}`);

//Explicit Conversion first way (new number) opertation
//it converts string type to number is 100.result going to be 100.its converts string into number by using new number instead of + opertator
var num=new Number("100");
console.log(`result is:${num}`);
//it dosent convert into the number in string form..Result going to be Nan-no conversion in string to number
var num=new Number("prathmesh");
console.log(`result is:${num}`);


//Explicit Conversion Second Way (+ opertator)

 var result="100";
 var num=+result;
 console.log(`num:${num}`);

 var result="chandra";
 var num=+result;
 console.log(`num:${num}`);

 //Implicit Conversion-javascript internally converts value of number is in string form to number form
 var num=100;
console.log(`===comparison is num=="100" result going to be:${num}`);
console.log(`===comparison is num=="" result going to be:${num}`);



//Its code of Sir

var numAdd = 10 + 40; // 50
var strAdd = "Pooja " + 70;
console.log(`strAdd is: ${strAdd}`);

console.log(` + operator can do the the type conversion as well from string to number `);
var numStr = "100";
var num = + numStr; // Explicit conversion
console.log(`typeof numStr is: ${typeof numStr}`);
console.log(`typeof num is: ${typeof num}`);

var numStr = "Chandra";
var num = + numStr;
console.log(`typeof ${numStr} is: ${typeof numStr}`);
console.log(`typeof ${num} is: ${typeof num}`);

console.log(`== comparison ${20 == "20"}`); // Implicit conversion

var myNumber = -77.333;
console.log(`myNumber values ${myNumber} and it's type is: ${typeof myNumber}`);
var strMyNumber = myNumber.toString();
console.log(`strMyNumber values ${strMyNumber} and it's type is: ${typeof strMyNumber}`);







