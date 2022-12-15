console.log(`==============Male Marriage Eligibility===========`);
var maleMarriageElligibility=function(gender,age,boyName){

 var disp=(gender=="Male" && age>=21? `Hey ${boyName} you are eligible for Marriage`:`Hey ${boyName} you are not eligible for Marriage`);
 return disp;

}
console.log(`${maleMarriageElligibility("Male",25,"Billgate")}`);
console.log(`${maleMarriageElligibility("Male",17,"Steve Jobs")}`);

console.log(`==============Female Marriage Eligibility===========`);

var femaleMarriageEligibility=function(gender,age,girlName){

    var checkCondition=(gender=="Female" && age>=18?`Hey ${girlName} you are eligible for Marriage`:`Hey ${girlName} you are not eligible for Marriage`);
    return checkCondition;
}
console.log(`${femaleMarriageEligibility("Female",16,"Jenifer")}`);
console.log(`${femaleMarriageEligibility("Female",27,"Malinda Gates")}`);