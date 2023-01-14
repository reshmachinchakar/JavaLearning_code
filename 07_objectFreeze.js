var isMarried = true;

let name = "John";
let frdName = "Tom"
Name = frdName;

const age = 23;

const anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
Object.freeze(anil);
anil.country = "India";
anil.age = 27;
delete anil.company;
console.log(anil);

const sunil = {
    age: 24,
    name: "Sunil",
    company: "Apple"
}
// anil = sunil; // Not allowed

// Array freezing 
const arrayNumbers = [2, 4, 5, 8];
// arrayNumbers = []; /// Not allowed
// Freeze array
Object.freeze(arrayNumbers);
//arrayNumbers.push(10);//not allowed as this array is freeze now
console.log(arrayNumbers);


const sunilAddress = {
    
    city: "mumbai",
    pin:2345
}

//merging two object

Object.assign(sunil,sunilAddress);
console.log(sunil);
//console.log(sunilAddress);


