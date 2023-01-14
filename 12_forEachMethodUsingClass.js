class Employee{
constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
this.emp_id=emp_id;
this.emp_name=emp_name;
this.emp_dept=emp_dept;
this.emp_salary=emp_salary;
this.emp_company=emp_company;

}

}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(22,"Mahesh","HR",85000,"Infy");

console.log(`1)Find out TCS employee and log only name and company`);
const objectConvert=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

objectConvert.forEach((currentVal) => {
if(currentVal.emp_company=="TCS")
{
    console.log(`Employee Name-${currentVal.emp_name},Company Name-${currentVal.emp_company}`);
}

});
console.log(`-----------------------------------------------------`);
console.log(`2)Find out Employee whose salary greater than or equal to 50000`);

objectConvert.forEach((currentSal) =>{
if(currentSal.emp_salary>=50000)
{
    console.log(currentSal);

}

});

console.log(`---------------------------------------------------`);
console.log(`3)Find the Sum of all Employee Salary`);

let sum=0;
objectConvert.forEach((currentSum) =>{
if(currentSum.emp_salary){
    sum=sum+currentSum.emp_salary;
}
 
});
console.log(`Sum of Salary:-${sum}`);

console.log(`----------------------------------------------------`);
console.log(`4)Find the Average Salary of all employee`);

let storeLen=objectConvert.length;
//console.log(storeLen);
let average;
objectConvert.forEach((currentAverage)=>{
if(currentAverage.emp_salary)
 {
    average=sum/storeLen;
 }

});
console.log(average);
console.log(`-----------------------------------------------------`);
console.log(`5)Find dept is IT||HR whose salary greater than 75000`);

objectConvert.forEach((currentDept)=>{
if(currentDept=="IT"||"HR" && currentDept.emp_salary>=75000){
    console.log(currentDept);
}

});
