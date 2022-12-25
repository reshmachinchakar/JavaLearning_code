
var checkerAge=function(gender,age, name){
        
if(gender!=="Male" && gender!=="Female")
{
    console.log(`Hey ${name}. Your gender is in Others`);
    return;
}
else
{
    if(gender=="Male" && age>=21)
    {
        console.log(`Hey ${name}. Your age is ${age}. You are elligible for marriage`);
    }
    
    else if(gender=="Female" && age>=18)
    {
        console.log(`Hey ${name}.Your age is ${age}. You are elligible for marriage`);
    }
    else {
        console.log(`Hey ${name}.Your age is ${age}. You are under age. You are not eligible for marriage.`);
    }
    
}

}
checkerAge("Male",17,"Ajay");
checkerAge("Male",25,"Mahesh");
checkerAge("Female",28,"Sneha");
checkerAge("Female",16,"Sita");
checkerAge("other",35,"Jaya");
checkerAge("other",41,"Ram");
