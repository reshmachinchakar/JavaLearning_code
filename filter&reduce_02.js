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
    
    console.log(`1)Find all the employees from "Wipro" company`);
    const array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

    const returnCompany=array_emps.filter((comp) =>{
        return comp.emp_company=="Wipro";

    });
    returnCompany.forEach((compVal)=>{
        console.log(compVal);
    });
    console.log(`--------------------------------------------------------`);
    console.log(`2)Find the employees from 'IT' or 'HR' dept` );

    const newDept=array_emps.filter((departmentVal)=>{
         return departmentVal.emp_dept=="IT" ||departmentVal.emp_dept=="HR";
    });
    newDept.forEach((val)=>{
         console.log(val);
    });
    console.log(`-------------------------------------------------------`);

    console.log(`3)Find all the employees whose emp id's greater than 50`);

   const EmpId= array_emps.filter((empId)=>{
           return empId.emp_id>50;
    });
    
    EmpId.forEach((valId)=>{
        console.log(valId);
    });
    console.log(`-------------------------------------------------------`);
    console.log(`4)Find out the employee whose name start with 'A' or 'V' or 'M'`);
   const nameStartAVM= array_emps.filter((checkVal)=>{
    return checkVal.emp_name.startsWith("A")||checkVal.emp_name.startsWith("V")||checkVal.emp_name.startsWith("M");
    });
    nameStartAVM.forEach((valueOfEmpName) =>{
        console.log(valueOfEmpName);

    });

console.log(`-------------------------------------------------------`);
console.log(`5)Find out salary of employee`);

const TotalSal= array_emps.reduce((runningTotal,value)=> {

    return runningTotal+value.emp_salary;
 },0);

 console.log(`Average Salary for all department is:${TotalSal/array_emps.length}`);

 console.log(`------------------------------------------------------`);

 console.log(`6)Find the average salary of IT dept`);

const DeptAvg= array_emps.filter((currentDept)=>{

return currentDept.emp_dept=="IT";

 });
const avgIT=DeptAvg.reduce((runningTotal,value) =>{
 return runningTotal+value.emp_salary;


},0);

console.log(`Average Salary of employee in IT dept is:${avgIT/DeptAvg.length}`);




const sumSalary=array_emps.reduce((runningSal,value)=>{

    return runningSal+value.emp_salary;


},0);

console.log(sumSalary);

console.log(`Average Salary------>${sumSalary/array_emps.length}`);

const Dept=array_emps.filter((currentVal)=>{
 return currentVal.emp_dept=="IT";

});
Dept.forEach((currentDept)=>{

    console.log(currentDept);


});

const returnIT=Dept.reduce((runITSalary,valueSal)=>{

    return runITSalary+valueSal.emp_salary;

},0);
console.log(returnIT);
console.log(`Average of IT dept Salary------>${returnIT/Dept.length}`);

const totalHR=array_emps.filter((currentHR)=>{
    return currentHR.emp_dept=="HR";

});
totalHR.forEach((showDept)=>{
console.log(showDept);

});
console.log(`------------------salary greater than 70000 INR  whose dept is HR----------------------`);
const greaterSal=totalHR.filter((currentSalary)=>{
  return currentSalary.emp_salary>70000;

});
greaterSal.forEach((GreatestVAl)=>{

    console.log(GreatestVAl);
});

const total=totalHR.reduce((runnSal,val)=>{

  return runnSal+val.emp_salary;

},0);
 console.log(`Total Salary:-${total}`);
 console.log(`Average Salary:-${total/greaterSal.length}`);


 


























