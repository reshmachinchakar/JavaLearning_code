console.log(`=============1)=================`);
var gradScore,hscScore,sscScore,candidateName;
var graduationCheck=function(gradScore,hscScore,sscScore,candidateName){
 
    var resultCheck=(gradScore>=70 || hscScore>=80 || sscScore>=90) ? `Congrats ${candidateName} is Elligible for TCS` : `Unfortunately ${candidateName} is not eligible for TCS`;
    return resultCheck;

}
console.log( `${graduationCheck(80,86,90,"Reshma")}`);
console.log( `${graduationCheck(70,65,55,"Shweta")}`);
console.log( `${graduationCheck(60,79,88,"Rajesh")}`);

console.log(`\n=============2)==============`);

var num=0=='';
console.log(`0 is exactly equals to :${num}`);
num=0=='0';
console.log(`0 is exactly equals to 0:${num}`);
num=0==false;
console.log(`0 is exactly equal to false:${num}`);
num=null==undefined;
console.log(`null is exactly equal to undefined:${num}`);
num=1==[1];
console.log(`1 is exactly equals to 1:${num}`);
num=1==true;
console.log(`1 is exactly equals to true:${num}`);
num=1=='1';
console.log(`1 is exactly equal to 1:${num}`);






