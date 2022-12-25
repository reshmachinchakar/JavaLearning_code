

function countCharA(string1) {
   
    var count=0;
   
    for (let index = 0; index < string1.length; index++) {
        var myString=string1.charAt(index);
        if(char=='a'||char=='A')
         {
           console.log(myString);
            count=count+1;
        }
        
    }
    console.log(`Total No of a/A in the string is:${count}`);
}
countCharA("I AM Learning JavaScript,The Language of Internet");
countCharA("My Favourite Movie is LAggAn");


function countCharR(newString) {
    var count=0;
   for (let index = 0; index < newString.length; index++) {
    var findChar=newString.charAt(index);
    
        if(findChar=='R'||findChar=='r')
        {
            count=count+1;
            console.log(findChar);
        }
        
        
    }
    console.log(`counter:${count}`);
   
}
countCharR("My Favourite Movie is HORROR Movies");

    
function factorialNumber(numberFaxt) {
    var result=1;
    for (let index = 1; index <=numberFaxt; index++) {
            
          result=result*index;  
        
    }
    
            console.log(`fact of ${numberFaxt} is:${result}`);
        
}
factorialNumber(5);
factorialNumber(7);
factorialNumber(8);
factorialNumber(12);






