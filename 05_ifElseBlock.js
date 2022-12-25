var age;
var calculateResult = function (age) {

  if ( typeof age == "number") {
    console.log(`data type is exactly equal:`,typeof age);

    if (age >= 18) {
      console.log(`Age is Elligible`);
    }
    else {
      console.log(`Age is not Elligible`);

          }
        }
else {
    console.log(`data type is not equal:`,typeof age);
    return;
}
}
calculateResult(20);
calculateResult(10);
calculateResult("10");
