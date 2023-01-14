
const arrayNums=[20,3,4,56,90,400,49];
console.log("---------------1)Perform Shalow clonning on two Arrays-----------------------");
let newArray=arrayNums;
console.log(newArray);

let updatArray=newArray.push(55,66);

console.log(arrayNums,newArray);

console.log("---------------2)Perform Deep clonning Using Spread Operator-----------------");
let spreadOpt=([...arrayNums]);

console.log("Update values on first array");
let updateArray=arrayNums.push(10,25);
console.log(arrayNums,spreadOpt);
console.log("-----------------------3)Given Array------------------------------------------------");
const arrayEven=[2,30,14,8];

console.log("Merged two arrays by Using Spread Operator");

let updateArr=[...arrayEven,...arrayNums];
console.log(updateArr);


const employ_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli,431202",

        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800-4567 32","+91 9096 5678 77"]
}

console.log(`5a)Employee Name ${employ_info.emp_name} Address is:${employ_info.address.locality.colony},Street is-${employ_info.address.locality.street},city is:${employ_info.address.city},State:-${employ_info.address.state},Country:${employ_info.address.country}`);

console.log(`5b)Employee Name is:-${employ_info.emp_name},Mobile No. is-${employ_info.mobiles[0]},${employ_info.mobiles[1]},${employ_info.mobiles[2]}`);

console.log("Deep Copy Using JSON.stringfy()");

let copyEmp=JSON.parse(JSON.stringify(employ_info));
console.log("Original Object And Clonned Object:",employ_info,copyEmp);

let updateSal=copyEmp.salary.july_month="80K";
console.log("6a)Updated Salary of clonned object is:",copyEmp.salary.july_month);

let changeOriginal=employ_info.address.country="United Kingdom";

console.log(`6b) ${employ_info.address.country}`);


 console.log("6c)Updated values in Original Object");
    for (const key in employ_info) {
        if (Object.hasOwnProperty.call(employ_info, key)) {
            const element = employ_info[key];
            console.log(element);
            
        }
    }
 console.log("6c)Updated Values in Clone object");
    for (const key in copyEmp) {
        if (Object.hasOwnProperty.call(copyEmp, key)) {
            const element = copyEmp[key];
            console.log(element);
            
        }
    }


    