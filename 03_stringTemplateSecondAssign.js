
var stringHandsOf=function(){

    var dispString="         Hey You are doing good, keep it up          ";
    console.log(`Given String is:a${dispString}`);
    console.log("Calculate length of the string:",dispString.length);
    console.log("After Removing Extra Spaces:",dispString.trim());
    var result=dispString.trim();
    var b=dispString.length-result.length;
    console.log("Total Count of Extra spaces is: ",b);
    console.log("Character at first index is: ",result.charAt(0),"And Last character index is:",result.charAt(result.length-1));
    var wordsInString=result.split(" ");

    console.log("Total word count after removing spaces:",wordsInString.length);

   
    console.log("The index of word good from given string is:",result.indexOf("it"));
    console.log("Using Substring is started from index 22:",result.substring(22,29));
    console.log("using Slice is started from index 22:",result.slice(22,29));
    console.log("Is String ends with word up:",result.includes("up"));
    console.log("Is string starts with word Hey:",result.includes("Hey"));
}
stringHandsOf();