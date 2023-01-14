console.log(`1)Created the class and added data members `);

class Bank{
 constructor(bankName,location,accountNo,ifsc,interestRate)
 {

    this.bankName=bankName;
    this.location=location;
    this.accountNo=accountNo;
    this.ifsc=ifsc;
    this.interestRate=interestRate;
 }


}
console.log(`-----------------------------------------`);
console.log(`2)Created Object of the bank`);

let axis_bank=new Bank("Axis Bank","Pune",1234556,2234,"12%");
let sbi_bank=new Bank("SBI Bank","Mumbai",2234555,4567,"14%");
let icici_bank=new Bank("ICICI Bank","Madha",3357786,5678,"16%");
let kotak_bank=new Bank("Kotak Bank","Solapur",4568887,8876,"18%");
let hdfc_bank=new Bank("HDFC Bank","Akluj",7777789,5467,"19%");
let punjab_bank=new Bank("Punjab Bank","Satara",4555667,6678,"12%");

console.log(`-----------------------------------------`);
console.log(`3)Created the map in such a way that key should be bank "accountNo" and value is object`);

const newMap=new Map();
newMap.set(1234556,axis_bank);
newMap.set(2234555,sbi_bank);
newMap.set(3357786,icici_bank);
newMap.set(4568887,kotak_bank);
newMap.set(7777789,hdfc_bank);
newMap.set(4555667,punjab_bank);

const mapBank=newMap.keys();
console.log(mapBank);
console.log(`Value of keys`);
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(punjab_bank);
console.log(`-----------------------------------------`);
console.log(`4)Traverse the map and log BankName,AccountNo,Interest Rates`);
for (const keys of mapBank) {
 const total=newMap.get(keys);
 console.log(`${total.bankName} ,Account No-${total.accountNo}, InterstRate-${total.interestRate}`);

}








