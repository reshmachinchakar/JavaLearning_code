const car={
    carName:"Creta SX",
    company:"Hundai",
    launchYear:2017
}
const carEngine={
enginePower:"1499CC",
maxPower:"113 BHP"

}
console.log("----------Merge the two Object Using Assign methods----------------");
let mergeObject=Object.assign(car,carEngine);
console.log(mergeObject);
console.log("----------Merge the two Object Using Spread operator----------------");
let spreadObject={...car,...carEngine};
console.log(spreadObject);


