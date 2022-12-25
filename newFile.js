var str = "Hi good morning all of you and myself";
var counter = 0;
var char=0;
var lastChar=str.length;
while(char<=lastChar)
{
    char1=str.charAt(char);
    if(char1==" ")
    {
        counter=counter+1;

    }
    char++;


}       
        
console.log(`counter:${counter}`);


