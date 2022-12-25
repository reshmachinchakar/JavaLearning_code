
function factAssign(value)
{
var count=1;
for (let index =value; index >=1; index--) {
    count=count*index;
}
console.log(`factorial ${value} is ${count}`);
}
factAssign(5);