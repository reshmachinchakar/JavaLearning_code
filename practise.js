var sentence= "   hello Angular girles Developer   ";
var string2="Good Evening";
console.log(sentence.length); 
var trimString = sentence.trim();
console.log(`after triming length: ${trimString}`);
console.log(`count =  `,trimString.length);  
console.log(`last position:${trimString.length-1}`);
console.log(`first character:${trimString.charAt(0)}`);
var positionOfLastChar=trimString.length-1;
var lastCharacter=trimString.charAt(positionOfLastChar);
console.log(`last character:${lastCharacter}`);
var extraSpace=sentence.length-trimString.length;
console.log(`extra space:${extraSpace}`);
console.log(`${trimString.substring(1,8)}`);
console.log(`${trimString.slice(0,8)}`);

//count word in the string
var splitString=trimString.split(" ");
console.log(`total word:${splitString.length}`);

//count spaces in  the string
var splitString1=trimString.split(trimString);
console.log(`total spaces:${splitString1.length}`);

// console.log(`given charact at position:${trimString.includes("good")}`);
// console.log(`given string is in:${trimString.toUpperCase()}`);
// console.log(`given string is in:${trimString.toLowerCase()}`);
// console.log(`replace string:${trimString.replace("Angular","React")}`);
// console.log(`concat string:${sentence.concat(string2)}`);

// // console.log(`\n============`);
// // console.log(`reverse string`);

// // //var string1="I am angular developer";
// // //var countLength=string1.length-1;
// // //console.log(`Count type:${countLength}`);
// // for (let index = 0; index <10; index++) {
// //     console.log("I am angular developer");
    
// // }














// var sentewnces=" you can do it girls";

// // var countWord=sentewnces.split(" ");
// // console.log(`count word:${countWord.length}`);
// var newString=sentewnces.trim();
// console.log(`after trim:${newString}`);
//  var countSpaces=newString.split(" ");
// console.log(`count Spaces: ${countSpaces.length}`);
// var last=newString.length-1;
// var countSpaces=newString.split(newString);
// console.log(`count Spaces: ${countSpaces.length}`);


var str = "Hi good morning all hOw are you?";
var counter = 0;

for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    var newChar = char.toLowerCase(index);
    if (newChar == "a"){
        counter = counter + 1;
    }
}
console.log(`The number of o/O in the string is: ${counter}`);