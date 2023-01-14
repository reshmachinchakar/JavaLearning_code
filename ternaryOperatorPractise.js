
var age;
var calculateAge=function(age){

    var respo=((age>=18 && age<=100)&&(age<0 || !(age>120)) ?`${age} age is elligible for voting`:`${age}
    Invalid Data`);
    return respo;

}
console.log(calculateAge(-10));
console.log(calculateAge(200));
console.log(calculateAge(45));