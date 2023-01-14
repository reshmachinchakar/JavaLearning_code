const person = {
    name: "Virat Kohli",
    age: 24,
    city: "Pune",
    pinCode: 431223,
    totalRun: 55000,
    isMarried: true
}

// let pinCodeVirat = person.pinCode;
// let totalRunVirat = person.totalRun;
// let cityVirat = person.city;
let { pinCode, totalRun,  city, isMarried, wifeName="Anushka"} = person; // Object Destructuring 

console.log(pinCode, totalRun, city, isMarried, wifeName );

console.log("Array Destructuring.....");
const arrayCompany = ["TCS", "Infy", "Google", "Twitter", "Metaverse"];
let [company1,company2,value]=arrayCompany;//object Destructing - instead of write this one is arrayname[index]
console.log(company1,company2,value);

// Array Destructuring-with default value-instead the value of company5 which is not initializes to get undefined to assign default value

let [ companyOne, companyTwo, mad ,company4,companyfour,company5="Microsoft"] = arrayCompany; 
console.log(companyOne,companyTwo, mad,company4,companyfour,company5);

// Self Invoking Function or IIFE - Immediately Invoked Function Expression

console.log("Self Invoking Function or IIFE - Immediately Invoked Function Expression");

(function show(){
    console.log("Bhar bhar ke likho");
})();

(function selfInvoke(){
    console.log("Self Invoking function");
})();
