//Assignment First by Using Class
console.log("1)-------------Using Vehicle Class........");
class Vehicle{
  constructor(Name,color,Brand,engine,type)
  {
    this.Name=Name;
    this.color=color;
    this.Brand=Brand;
    this.engine=engine;
    this.type=type;
  }

}

let demoVeh1=new Vehicle("TVS","Black","Hero","Parallel Twin Engine","2-wheeler");
let demoVeh2=new Vehicle("Discover","Black","Maruti","Boxer Engine","2-wheeler");
let demoVeh3=new Vehicle("Unicon","Black","Hero","V-Twin Engine","2-wheeler");
let demoVeh4=new Vehicle("Activa","white","Hero","Single Cylinder engine","2-wheeler");
let demoVeh5=new Vehicle("Splender","white","Hero","Two Cylinder engine","2-wheeler");
console.log(demoVeh1);
console.log(demoVeh2);
console.log(demoVeh3);
console.log(demoVeh4);
console.log(demoVeh5);

console.log("2)------------Using Colleage Class------");

class Collage{
 constructor(clg_name,location,contc_no,dept,hostel)
 {
    this.clg_name=clg_name;
    this.location=location;
    this.contc_no=contc_no;
    this.dept=dept;
    this.hostel=hostel;
 }
 showDetails(){

    console.log("----------------------Colleage Details Using Member Function------------------------------");
    console.log(this.clg_name,this.location,this.contc_no,this.dept,this.hostel);
 }

}
let collObjectName1=new Collage("SIIT","Paniv",223856,"IT Dept","girls hostel");
let collObjectName2=new Collage("KBP","Satara",343856,"Medical Dept","Boys hostel");
let collObjectName3=new Collage("Sinhgad","Pune",223856,"Science Dept","girls hostel");
let collObjectName4=new Collage("Sveri","Pandharpur",223856,"Engineering Dept","Boys hostel");
let collObjectName5=new Collage("MIT","Solapur",223856,"Diploma Dept","girls hostel");

console.log(collObjectName1);
console.log(collObjectName2);
console.log(collObjectName3);
console.log(collObjectName4);
console.log(collObjectName5);

collObjectName1.showDetails();
collObjectName2.showDetails();
collObjectName3.showDetails();
collObjectName4.showDetails();
collObjectName5.showDetails();

console.log("3)------------Traverse Object------");
console.log("3.1)------------Invoking Function in First Object------");
function traverseObject(firstName){

    for (const key in firstName) {
        if (Object.hasOwnProperty.call(firstName, key)) {
            const element = firstName[key];
            console.log(key,"-",element);
          
            
        }
      
    }
   
}
traverseObject(collObjectName1);
console.log("----------------------------------------------------");
traverseObject(collObjectName2);
console.log("----------------------------------------------------");
traverseObject(collObjectName3);
console.log("----------------------------------------------------");
traverseObject(collObjectName4);
console.log("----------------------------------------------------");
traverseObject(collObjectName5);

