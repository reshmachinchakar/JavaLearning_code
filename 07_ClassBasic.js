
class Employee{

    constructor(name,id,age,city){
        this.name=name;
        this.id=id;
        this.age=age;
        this.city=city;
    }
    showDetails()
    {
        console.log(this.name,this.id,this.age,this.city);
    }
    
}

let empResh=new Employee("Reshma",22,33,"Pune");
let empVarsha=new Employee("Varsha",32,23,"Mumbai");
let empShubhangi=new Employee("Shubhangi",34,44,"Satara");
console.log(empResh);
console.log(empVarsha);
console.log(empShubhangi);
empResh.showDetails();
empVarsha.showDetails();
empShubhangi.showDetails();

