
console.log(`===============Age is Elligible For Voting By Using if-Else Block==============`);
var age;
var ageResult = function (age) {
    if (age >= 18 && age <= 100) {
        console.log(`"${age}" is Elligible for voting`);
    }
    else {

        if (age <= 18 && age > 0) {
            console.log(`"${age}" is not alligible for voting`);
            return age;

        }
        else {
            if (age <= 0 || age > 120) {
                console.log(`This is Invalid Data:"${age}"`);
            }

        }
    }
}

ageResult(45);
ageResult(17);
ageResult(8);
ageResult(20);
ageResult(-10);
ageResult(200);
ageResult(0);

console.log(`\n============Marks Calculation By Using if-Else Block=====================`);
console.log(`\n`);
var marks;

var calculateMark = function (marks) {

    if ( typeof marks == "number") {
    
        if (marks <= 0 || marks > 120) {
            console.log(`Please Provide Valid Marks:${marks} `);
        }
        else {
            if (marks >= 90 && marks <= 100) {
                console.log(`Fantastic Marks,Your Grade is A+:${marks}`);
            }
            else {
                if (marks >= 75 && marks < 90) {

                    console.log(`Excellent Marks , Your Grade is A:${marks}`);
                }
                else {
                    if (marks >= 50 && marks <= 75) {
                        console.log(`Good marks ${marks},Your grade is B`);
                    }
                    else {
                        if (marks >= 35 && marks <= 50) {
                            console.log(`Marks is ${marks},Your grade is C,Need Improvement`);
                        }
                    }

                }
            }
           
        }
            
    }

    else{
        console.log(`Data Type Is Invalid:`,typeof `${marks}`);
    
   
    }
}
    calculateMark(98);
    calculateMark(80);
    calculateMark(90);
    calculateMark(0);
    calculateMark(150);
    calculateMark(-7);
    calculateMark(35);
    calculateMark(29);
    calculateMark(64);
    calculateMark(49);
    calculateMark("49");
    calculateMark("ajay");

