class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }

}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`1)Sort the employee name and dept in ascending order of employee Id `);
console.log(``);
let sortId = array_employees.sort((firstId, secondId) => {

    return firstId.emp_id > secondId.emp_id ? 1 : -1;

});

sortId.forEach((val) => {
    console.log(val.emp_id, val.emp_name, val.emp_dept);

});

console.log(`---------------------------------------------------------------`);
console.log(`2)Sort the array in ascending order of employee department`);

let sortDept = array_employees.sort((firstDept, secondDept) => {

    return firstDept.emp_dept > secondDept.emp_dept ? 1 : -1;

});

sortDept.forEach((val) => {
    console.log(val.emp_id, val.emp_dept, val.emp_company);

});

console.log(`---------------------------------------------------------------`);
console.log(`3)Sort the employee in descending order of employee salary`);
console.log(``);
let sortSalary = array_employees.sort((firstSal, secondSal) => {

    return firstSal.emp_salary > secondSal.emp_salary ? -1 : 1;
});

sortSalary.forEach((CurrentSal) => {
    console.log(CurrentSal.emp_name, CurrentSal.emp_salary, CurrentSal.emp_company);


});


