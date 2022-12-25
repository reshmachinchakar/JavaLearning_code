
  //Access property in first way of object
const person = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    speak:function(){
        console.log("function");
    }
  }
  console.log(typeof person);
  console.log(person);
  
  const personAge = person.age;
  console.log(`Person age is: ${personAge}`);
  
  //Access property in second way of object
  const personName = person["name"];
console.log(personName);

console.log(`=== Creating an empty object====`);
const mobile = {

}
mobile.company = "Micromax";
mobile.camera = "20Px";
console.log(mobile);
person.speak=function(){
    console.log(function);
}


console.log(`Nested object`);
const student = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70,
        math: 90,
        english: 87,
        add: function() {
            return this.science+this.math+this.english;
         },
         familyMembers:['jenny','mony','tenny','goni']
 
    }
}
// console.log(`Accessing an Nested object property`);
// const scienceMark =  student.marks.science;
// console.log(scienceMark);

console.log(`Accessing an Nested object property`);
const scienceMark =  student.marks.science;
console.log(scienceMark);

console.log(`Updating an Nested object property`);
student.marks.english = 97;

console.log(`Adding an Nested object property`);
student.marks.programming = 100;

console.log(`Deleting an Nested object property`);
delete student.marks.english;

var totalMarks=student.marks.add();
console.log(totalMarks);

console.log(student.familyMembers);


console.log(`Object entries`);
const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates"
}
console.log(Object.entries(billgates));
console.log(Object.keys(billgates));
console.log(Object.values(billgates));
