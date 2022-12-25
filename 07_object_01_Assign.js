const professor={

    name:"Nalawade",
    height:5,
    weight:60,
    age:35,
    designation:"Paniv",
    degree:{
        engineering:'CSC',
        PHD:'Adv Computing',
        Medical:'D.Pharm',
        
        totalDegrees:function (){
        
        return this.engineering+(" ")+this.PHD+(" ")+this.Medical;
     }
 
        

    },

    certificates:{
             first:'Hacker Rank Participation',
             second:'Certificate in IFE course',
             Third:'Certificate in Adv Programming'

    },

}
console.log("Professor Information");
console.log(professor);
console.log("========================================");
console.log("Adding Nested Object is Degree");
console.log(professor.degree);
console.log("========================================");
console.log("Adding Nested Object is Certificates");
console.log(professor.certificates);
console.log("========================================");
let totalCount=professor.degree.totalDegrees();
console.log("Total Concat  Degree:",totalCount);
console.log("========================================");
console.log("Adding new Property in Professor Object");

professor.city="Pune";
console.log("Adding New Property:-",professor.city);
console.log("========================================");

console.log("Existing one:",professor.designation);

professor.designation="Mumbai";
console.log("Modify one:",professor.designation);
console.log("========================================");
console.log("Before deleting certificates:-",professor.certificates);
delete professor.certificates.Third;
console.log("After deleted one Certificate:-",professor.certificates);
console.log("========================================");
console.log("Adding one certificate in object");
professor.certificates.Third="Certificate in Board";
console.log(professor.certificates);
console.log("========================================");
console.log("Nested Object in Certificate is-:",professor.certificates.Third);
console.log(professor.certificates);

