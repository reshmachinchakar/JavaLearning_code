
console.log(`1)Creating Bank Details with data members`);

class Bank{
  constructor(bank_Name,location,account_no,ifsc,interest_rate)
  {
     this.bank_Name=bank_Name;
     this.location=location;
     this.account_no=account_no;
     this.ifsc=ifsc;
     this.interest_rate=interest_rate;

  }

}
console.log("b)Creating Object of bank");
let axisBank=new Bank("Axis Bank","Satara",2234,1222,"12%");
console.log(axisBank);
let sbiBank=new Bank("SBI Bank","Mahad",3345,6753,"13%");
console.log(sbiBank);
let iciciBank=new Bank("ICICI Bank","Mumbai",2234,3321,"15%");
console.log(iciciBank);
let kotakBank=new Bank("Kotak Bank","Mahad",22356,1234,"17%");
console.log(kotakBank);
let hdfcBank=new Bank("HDFC Bank","Dhule",3378,2234,"18%");
console.log(hdfcBank);
let punjabBank=new Bank("Punjab","Pandharpur",3345,6789,"19%");
console.log(punjabBank);
console.log("----------------------------------------------------------------------------");
console.log("c)Create an Array of above object and traverse with for of loop");
const demoArray=[axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,punjabBank];
//console.log(demoArray[0]);
console.log("Using for of loop");
for (const element of demoArray) {
    console.log(element.bank_Name,element.location);
}
console.log(`-----------------------------------------------------------------------------`);
console.log("d)Find the object which has name Kotak Bank using for of loop");
for (const element of demoArray) {

    if(element.bank_Name=="Kotak Bank")
    {
          console.log(element);

    }
    
}
console.log(`---------------------------------------------`);
console.log("e)Log the details using for loop");
// for (let index = 0; index < demoArray.length; index++) {
//   console.log(demoArray[index]);
  
// }

for (let index = 0; index < demoArray.length; index++) {
  const element = demoArray[index];
  if(element.location=="Mahad")
  {
    console.log(element);
  }
 
  
}

