//It is feature of ES6

const person={
Fname:"Sachin",
lName:"Tendulkar",
age:24,
city:"Mumbai"

}
//this one is a complicated
let firstWay="Details:-"+person.Fname+" "+person.lName+" "+person.city;
console.log(firstWay);
let secondWay=person.Fname.concat(" ",person.lName);
console.log(secondWay);

//Instead of this one we can use String Template & Variable Substitution-for Code Readability

let codeReadable=(`Details:-${person.Fname}${person.lName}${person.city}`);
console.log(codeReadable);

//using Object Destructing

let {Fname,lName,city}=person;
console.log(Fname,lName,city);

