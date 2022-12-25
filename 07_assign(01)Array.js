const fruit_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log("Given Element in Array");
console.log("------------------------------------------------------------------------------------------------");
console.log(fruit_seasonal);
var firstElement=fruit_seasonal[0];
console.log("1)First Element in Array-",firstElement);
console.log("------------------------------------------------------------------------------------------------");
var lastElement=fruit_seasonal[fruit_seasonal.length-1];
console.log("Last Element in Array-",lastElement);
console.log("------------------------------------------------------------------------------------------------");
fruit_seasonal.unshift("Papaya");
console.log("Add Papaya before the element Banana-");
console.log(fruit_seasonal);
console.log("------------------------------------------------------------------------------------------------");
var removeArray=fruit_seasonal.splice(4,1);
console.log("Remove Mango Element",removeArray);
console.log(fruit_seasonal);
console.log("------------------------------------------------------------------------------------------------");
var pushElement=fruit_seasonal.push("Pineapple");
console.log("Push element:-");
console.log(fruit_seasonal);
console.log("------------------------------------------------------------------------------------------------");
var insertElement=fruit_seasonal.splice(4,0,"Dragon Fruit");
console.log("Add Dragon fruit Element");
console.log(fruit_seasonal);
console.log("------------------------------------------------------------------------------------------------");
var replaceElement=fruit_seasonal.splice(2,1,"Kiwi");
console.log("Replace Element Orange with kiwi-");
console.log(fruit_seasonal);
console.log("--------------------------Print the Index 1 to 4 Element----------------------------------------------------------------------");
for (let index = 1; index <= 4; index++) {
    const element = fruit_seasonal[index];
    console.log(element);
    
}

var lastThreeElement=fruit_seasonal.splice(fruit_seasonal.length-3);
console.log("Select 3 last elements:",lastThreeElement);
console.log("------------------------------------------------------------------------------------------------");








