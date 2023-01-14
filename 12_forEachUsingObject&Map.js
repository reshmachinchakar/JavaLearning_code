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


    const setObject=new Set();
    setObject.add(emp_anil);
    setObject.add(emp_radha);
    setObject.add(emp_rishi);
    setObject.add(emp_sonali);
    setObject.add(emp_monika);
    setObject.add(emp_viny);
    setObject.add(emp_mahi);
    
     setObject.forEach((currentObject)=>{
        console.log(currentObject.emp_name,currentObject.emp_dept);
     });

     const mapObject=new Map();
     mapObject.set("Preferrance:1-Pune",emp_anil);
     mapObject.set("Preferrance:2-Mumbai",emp_radha);

     mapObject.forEach((ValObj,KeysVal)=>{

          console.log(`City Preferrance:${KeysVal}=========>`,ValObj);
     });

     const convertObjToArray=[emp_anil];

    const currentEmp= convertObjToArray.map((currObj)=>{

        currObj.emp_name= currObj.emp_name="Reshma";
     return currObj;
     });
     currentEmp.forEach((valObj)=>{
         // console.log(valObj.emp_name,valObj.emp_company);
            console.log(valObj);
     });

