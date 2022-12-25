var counter=0;
var myString="I am very good IT Developer";
console.log(`Given String is:${myString}`);
for (let index = 0; index < myString.length; index++) {

    var char=myString.charAt(index);
    if(char=='a'||char==`A`|| char==`e`||char==`E`|| char==`i`||char==`I`||char==`o`||char==`O`||char==`u`||char==`U`)
    {
        
        counter=counter+1;
    }
    
}
console.log(`total vowels in the string:${counter}`);

console.log(`\n============Cube Function=================`);

function cubeFun(num) {

    var sum=0;

    for (let index = 1; index <=num; index++) {
       sum=sum+(index*index*index);
  
    }
    console.log(`cube of 1 to 5 is.:${sum}`);
}
cubeFun(5);
//cubeFun(7);
//cubeFun(8);
console.log(`\n============Factorial Function=================`);

function factAssign(value)
{
var count=1;
for (let index =value; index >=1; index--) {
    count=count*index;
}
console.log(`factorial ${value} is ${count}`);
}
factAssign(5);
factAssign(7);
factAssign(8);
factAssign(12);


console.log(`=============================odd Position==================================`);


function oddCount(value){
    console.log(`Given String is:${value}`);
    var concatStr="";
    var splitWord=value.split(" ").join("");
    console.log(splitWord); 
   for (let index = 0; index < splitWord.length; index++) {
    var char=splitWord.charAt(index);
    if(index%2==1){
       
        concatStr=concatStr.concat(char);
    }
    
   
   }
  
   console.log(`Odd Char Position is:${concatStr}`);
  
}
oddCount("Hard work Pays back");
console.log(`\n======================`);
oddCount("Soon I will be Angular IT Champ");
