
//declare array;

let arrayDemo=[10,20,30,40,50];
console.log(arrayDemo);

//find out position of array

let arrayIndexOf=arrayDemo[0,2];
console.log(arrayIndexOf);

//type of array-object
console.log(typeof arrayDemo);

//length of array
let lengthArrays=arrayDemo.length;
console.log(lengthArrays);

//update array
arrayDemo[4]=30;
console.log(arrayDemo);

arrayIndexOf=arrayDemo.indexOf(30);
console.log(`array first position occurance--${arrayIndexOf}`);



console.log(`\n========================`);

let arrayIndexOf1=arrayDemo.indexOf(30);
console.log(arrayIndexOf1);

arrayIndexOf=arrayDemo[4];
console.log(arrayIndexOf);

let collectElement=arrayDemo.join("*");
console.log(collectElement);

for (let index = 0; index < arrayDemo.length; index++) {
    const element = arrayDemo[index];
    console.log(element);
    
}


for (let index = 0; index < arrayDemo.length; index++) {
    const element = arrayDemo[index];
    //console.log(element);

    if(index%2==0)
    {
        console.log(`no is even:${element}`);
        console.log(`position at the element:${index}`);
    }
    
  
}





