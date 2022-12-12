var square=function(num){
    // var s=num*num;
    // console.log("Square of the No.",num,"=",s);
console.log("Square of",num,"=",num*num);
}
square(5);
square(6);
square(25);
square(100);
console.log("\n======Type of Square=====");
console.log(typeof square);
console.log("=========================");


console.log("\n=======Area of Rectangle===========");

var areaRectangle=function(length,breadth){

    console.log("Area Of Rectangle=",length*breadth);

}
areaRectangle(499,917);
console.log("==================================");
console.log("\n====Swap Values By Using FunctionExpression====");

var swapValues=function(a,b){

    console.log("Before Swap=",a,b);
    var c=a;
    a=b;
    b=c;
    console.log("After Swap=",a,b);
}
swapValues("Virat","Anushka");
console.log("============================================");
swapValues(1000,2000);

console.log("\n================String======================");
var demoString="JS the most popular language";


console.log("Total Character of String is=",demoString.length);

console.log("Character at index 5: ", demoString.charAt(5));
console.log("Character at index 12: ", demoString.charAt(12));
var lastChar=demoString.length;
console.log("Index of Last Character:",demoString.charAt(lastChar-1));

// console.log("Last character at Index:",demoString.charAt(demoString.length-1));

console.log("First Character of Index:",demoString.charAt(0));
var squareLength=demoString.length*demoString.length;
console.log("Square of Length is:",squareLength);
console.log("======================================");