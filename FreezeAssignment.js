const personalDetail={

    PerName:"Reshma Chinchakar",
    age:27,
    Education:"BCS",
    city:"Pandharpur",
    Birth_date:"25 May 1995",
    Mob_no:35678854,
    gender:"Female",
    BloodGroup:"O+ve",
    isMarried:"Yes",
    Hobbies:"Travelling"
}
console.log("1)Personal Details:-");
console.log(personalDetail);
console.log("-----------------------------------------------");
const collegeDetails={

    collageName:"Shriram Institute Of Information Technology",
    clg_id:223445,
    Clg_Dept:{
          first:"Enginnering",
          second:"IT",
          Third:"Medical",
          fourth:"Diploma"
    },
     clgFacility:{
        one:"Buses",
        Two:"Library",
        Three:"Girls Hostel",
        Four:"Boys Hostel",

    },
    infrastructure:"Good",

}

console.log("2)Colleage Details:-");
console.log(collegeDetails);
collegeDetails.clgFacility.one="Stock Details";
console.log(`Access Updated Nested Object.......`,collegeDetails.clgFacility.one);
console.log(collegeDetails.clgFacility);

console.log("3)--------------------Merge two Objects---------------------");

Object.assign(personalDetail,collegeDetails);
console.log(personalDetail);

console.log("------------------------------------------------------------");

const frndArray=["John","Mohit","sudha","Sandhya","Sham"];

Object.freeze(frndArray);

frndArray[0]="Sham";
console.log("Do not update value of the Array as it is freeze:",frndArray[0]);
console.log(frndArray);

console.log(`Using "for of" loop`);
for (const element of frndArray) {


    console.log(element);

    
}

console.log(`Reverse String`);
let stringSam="Codemind Technology";
let lastLen=stringSam.length-1;
let emp="";


for (let index = 0; index < lastLen; index++) {
    
    var charr=stringSam.charAt(index);
    
    if(charr==" ")
    {
        break;
    }
    emp=emp+charr;

}
console.log(emp);

var emp1="";
for (let index = lastLen; index>=0; index--) {
    
    var char=stringSam.charAt(index);
    if(char==" ")
    {
        break;
    }
    emp1=emp1+char; 
}
console.log(emp1);
console.log(emp+" "+emp1);


function prime(num)
{
 for (let index = 1; index <= num; index++) {
    
  if(num%index==0 && num>1)
    {
        console.log(`No is prime:${num}`);
    }
  return;
}
//console.log(`No is not${num}`);
}
prime(5);
prime(11);
prime(2);
prime(15);
prime(4);