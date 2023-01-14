console.log("Array shallow Cloning");
let arrayOfEvenNum = [0, 2, 4, 6, 8 ];
let arrayOfNum = arrayOfEvenNum; // Shallow Cloning
arrayOfEvenNum[1] = 10;
console.log(arrayOfEvenNum);
console.log(arrayOfNum);

// Deep Cloning-create seperate copy with same value bt doesnt affect on reference variable
console.log("Array Deep Cloning");
let arrayOfNumber = [0, 2, 4, 6, 8 ];
let arrayClone =  [... arrayOfEvenNum]; // Deep Clone
arrayOfNumber[2] = 100;
arrayClone[2] = 200;
console.log(arrayOfNumber);
console.log(arrayClone);


console.log("===== Array merge using concat operator ======");
let arrayNum=[12,13,34,56];
let arrayNew=[90,60,40,50];
let concatArray=arrayNum.concat(arrayNew);
console.log(arrayNum);
console.log(arrayNew);
console.log(concatArray);
console.log("===== Array merge using spread operator ======");
let arrayNum1=[12,13,34,56];
let arrayNew1=[90,60,40,50];
let concatArrays=[...arrayNum1,...arrayNew1];
console.log(arrayNum1);
console.log(arrayNew1);
console.log(concatArrays);


console.log("===== Object merge using spread operator ======");
let empAnil = {
    name : "Anil",
    role: "Software Developer"
} 
let empAddress = {
    city: "Pune",
    street: "Wakad - 411057"
}
   let mergedObject = {...empAnil, ...empAddress};
   console.log(mergedObject);
