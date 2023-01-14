
function Bank(bank_Name,location,ifsc_code,branchCode)
{
    this.bank_Name=bank_Name;
    this.location=location;
    this.ifsc_code=ifsc_code;
    this.branchCode=branchCode;

}
let yesBank=new Bank("Yes Bank","Pune",2345,222667);
console.log(`Bank Details is:${yesBank.bank_Name},${yesBank.location},${yesBank.ifsc_code},${yesBank.branchCode}`);
console.log("----------------------------------------------------------------");
let sbiBank=new Bank("SBI Bank","Mumbai",1245,445667);
console.log(`Bank Details is:${sbiBank.bank_Name},${sbiBank.location},${sbiBank.ifsc_code},${sbiBank.branchCode}`);
console.log("----------------------------------------------------------------");
let mahBank=new Bank("Maharashtra Bank","Pune",4567,6722667);
console.log(`Bank Details is:${mahBank.bank_Name},${mahBank.location},${mahBank.ifsc_code},${mahBank.branchCode}`);
console.log("----------------------------------------------------------------");
let axisBank=new Bank("Axis Bank","Pune",78554,792667);
console.log(`Bank Details is:${axisBank.bank_Name},${axisBank.location},${axisBank.ifsc_code},${axisBank.branchCode}`);
console.log("----------------------------------------------------------------");

Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";

console.log(`Open Time Of SBI Bank is:"${sbiBank.openTime}"`);
console.log(`Close Time Of SBI Bank is:"${sbiBank.closeTime}"`);
console.log("------------------------------------------------------------");
console.log(`Bank Name-"${axisBank.bank_Name}" and Close Time-"${axisBank.closeTime}"`);
console.log("------------------------------------------------------------");
console.log(`Bank Name-"${yesBank.bank_Name}".Branch Code-"${yesBank.branchCode}" and Bank Open Time-"${yesBank.openTime}"`);
console.log("------------------------------------------------------------");

