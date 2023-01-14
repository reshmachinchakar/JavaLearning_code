const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(`1)Reverse the array-----------------------`);

array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log(`------------------------------------------`);
console.log(`2)Using sort() method as it as without any custom sorting logic`);

array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log(`------------------------------------------`);
console.log(`3)Sort the array in ascending order using custom logic`);

array_roll_numbers.sort((firstVal, secondVal) => {

    return firstVal > secondVal ? 1 : -1;

});
console.log(array_roll_numbers);

console.log(`-----------------------------------------`);
console.log(`4)Greatest Number of array`);
let greaterNo = array_roll_numbers[array_roll_numbers.length - 1];
console.log(greaterNo);

console.log(`-----------------------------------------`);
console.log(`5)Smallest Number of array`);
let smallNo = array_roll_numbers[0];
console.log(smallNo);
console.log(`------------------------------------------`);
console.log(`6)Remove duplicate elements of array`);

const newArray = new Set([...array_roll_numbers]);
console.log(newArray);
