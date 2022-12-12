function show(){
    console.log("Javascript");
}
show();

function display(){
    console.log("Function");
}
display();

var firstName,lastName,collegeName;

function personalDetails(firstName,lastName,collegeName){

    console.log("Details:-",firstName,lastName,collegeName);
}
personalDetails("Reshma","Chinchakar","SIIT");

function swapValues(value1,value2){
  console.log("============Before swap============");
  console.log(value1,value2);
  var temp=value1;
  value1=value2;
  value2=temp;
  console.log("=========after swap======");
  console.log(value1,value2);
}
swapValues("Virat","Anushka")
swapValues(1000,2000);


function addThreeValues(a,b,c){
 
    var z=a+b+c;
    console.log("Addition of arguments=",z);
    return z;
    
}
var x=addThreeValues(10.23,600,40);
console.log("return value=",x);
var s=addThreeValues("Hello","Good","Morning");
console.log("return value=",s);








