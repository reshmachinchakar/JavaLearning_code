//Transform Array by using Map() methods and it takes three values as same as forEach() method.
const arrayOfNum=[0,2,3,4,5];

const arrayTransform=arrayOfNum.map((currentvalue,index,array)=>{
return currentvalue+10;

});
console.log(arrayTransform);

const arraySquare=arrayOfNum.map((currentval)=>{
    return currentval*currentval;

});
console.log(arraySquare);

class Vehicle {
    constructor(company,model,fuel,drive,price){
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}
let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

 const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];
 const arrayOfVehicleObject = arrayOfVehicles.map( (vehicle)=> {
    vehicle.price = vehicle.price - 10000; // 8000000 - 10000
    return vehicle;
 } );
 arrayOfVehicleObject.forEach((vehicle)=> {
    console.log(vehicle);
 });

 const arrayOfNum1 = [0, 2, 3, 5, 6]; // [ 0, 3, 5, 8, 10]
 const arrayWith = arrayOfNum1.map((value, index )=> {
    return value + index;
 });
 console.log(arrayOfNum1);




 console.log(`------------------------------------------`);
 const arrayOfModel=arrayOfVehicles.map((currentval)=>{
 
      currentval.drive=currentval.drive="Six Seater ";
      return currentval;
 
 });
 
 arrayOfModel.forEach((vehicle)=>{
 console.log(vehicle);
 });


 const arrayNew=[2,4,5,6,7,8,9,10];

 const holdArray=arrayNew.map((currentVal)=>{
    return currentVal+1;

 });
 console.log(holdArray);

 holdArray.forEach((showVal,index)=>{

 console.log(`${index}====>`,showVal);

 });
 console.log(holdArray);
 
