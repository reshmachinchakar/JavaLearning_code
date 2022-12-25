var req=5;
while(req<=15)
{
    console.log(req);
    req++;
}
console.log(`\n=====================`);
var req=50;
while(req>=40)
{
    console.log(req);
    req--;
}

console.log(`\n=====================`);
var a=1;
var count=0;
while(a<=30)
{
  if(a%2==1){
  console.log(`No is odd:${a}`);
  count=count+1;
}
a++;

}
console.log(`count is:${count}`);


console.log(`\n=========Even No============`);
var a=0;
var count=0;
while(a<=20)
{
  if(a%2==0){
  console.log(`No is even:${a}`);
  count=count+1;
}
a++;

}
console.log(`count is:${count}`);

console.log(`\n=========Table No 5 to 50 by using do-while loop============`);
var a=5;

do {
  console.log(`${a}`);
   a=a+5;
} while (a<=50);

console.log(`\n=========Table No 10 to 100 by using do-while loop============`);
var a=10;

do {
  console.log(`${a}`);
   a=a+10;
} while (a<=100);

console.log(`\n=========Table No 100 to 10 reverse by using do-while loop============`);
var a=100;

do {
  console.log(`${a}`);
   a=a-10;
} while (a>=10);

