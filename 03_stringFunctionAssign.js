console.log(`=======First Assignment============`);

var squareOfWordLength= function(dispString){

    console.log(`Length of ${dispString} is:${dispString.length}`);
    console.log(`Square of given string is:${dispString.length*dispString.length}`);
 
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`===========using Function Expression in String with return value==============`);

var returnString=function(givenString){

    var result=givenString.length;
    console.log(`Length of given String is::${result}`);
    return result;

}
var handle=returnString("Beauty Of Nature");
console.log(`hold return value is:${handle}`);

var handle=returnString("India");
console.log(`hold return value is:${handle}`);







console.log(`======Second Assignment============`);

var develpString=function(){

    var stringName="I am Angular Developer";
    console.log(`Given string is:${stringName}`);
    console.log(`Length of given string is:${stringName.length}`);
     
    var trimSpaces=stringName.split(" ");
    console.log(`Total words in given string:${trimSpaces.length}`);

    console.log(`Length of the string is divided by count of word:${stringName.length/trimSpaces.length}`);

    console.log(`Length of the string is multiply by count of word:${stringName.length*trimSpaces.length}`);


}
develpString();