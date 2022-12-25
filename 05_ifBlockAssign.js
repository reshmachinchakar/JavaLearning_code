
var age;
var calculateAge=function(age){

    if(age>=18 && age<100){      
      console.log(`${age} is elligible for voting`);
    }
    if(age<18 && age>0){
        console.log(`${age} is not elligible for voting`);
    }
    if (age<=0 || age>=100) {
      console.log(`${age} is Invalid Data`);

    }

}
calculateAge(45);
calculateAge(17);
calculateAge(8);
calculateAge(20);
calculateAge(-10);
calculateAge(200);
calculateAge(0);







console.log(`\n==================================================`);

var marks,marks1;
var gradCalculate=function(marks){

    if( marks<=0 || marks>=100)
    {
   
        console.log(`Mark is ${marks} :Please provide the valid marks`);

    }
    if(marks>=90 && marks<100){
        console.log(`Fantastic Marks ${marks},Your grade is A+`);
       
    }
   
    if(marks>=75 && marks<=90){
        console.log(`Excellent Marks ${marks},Your grade is A`);
    }
    if(marks>=50 && marks<=75){
        console.log(`Good marks ${marks},Your grade is B`);
    }
    if(marks>=35 && marks<=50)
    {
        console.log(`Marks is ${marks},Your grade is C,Need Improvement`);
    }

    
}
gradCalculate(98);
gradCalculate(80);
gradCalculate(90);

gradCalculate(0);
gradCalculate(150);
gradCalculate(-7);
gradCalculate(35);
gradCalculate(29);
gradCalculate(64);
gradCalculate(49);


    

