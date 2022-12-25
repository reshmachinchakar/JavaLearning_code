


function countCharA(value) {
    var count=0;
for (let index = 0; index < value.length; index++) {
    var char=value.charAt(index);
    if(char=='a'|| char=='A'){
      
        console.log(`char at a/A is in string:${char}`);
        count=count+1;
       
    }
    
   
}
console.log(`count :${count}`);
}
countCharA("I am learning Javascript,The language of InternetA");
countCharA("I Love JavaScript");



function countCharA(value) {
var count=0;
    for (let index = 0; index < value.length; index++) {
        var char=value.charAt(index);
        if(char==" "){
          
            console.log(`spaces at a/A is in string:${char}`);
            count=count+1;
           
        }
      
        
    }
    console.log(`count :${count}`);
    }
    countCharA("I am learning Javascript, The language of InternetA");

//count check is even or odd in given string
console.log(`\n==================================================================`);
    function countCharFact(value) {
    
        var count=0;
        var count1=0;
            for (let index = 0; index < value.length; index++) {
            var myStringChar=value.charAt(index);
                if(index%2==0){
                    console.log(`no of ${index} position is even-${myStringChar}`);
                    //console.log(`myString:${myStringChar}`);
                   count=count+1;
                   
                }
                else{
                    console.log(`no of ${index} position is odd-${myStringChar}`);
                   count1=count1+1;
                   
                }
              
                
            }
            console.log(`even count :${count}`);
            console.log(`odd count :${count1}`);
            }
            countCharFact("Good Morning");