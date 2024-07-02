function greetUser() {
    console.log("Function greetUser invoked");
}
function getMyName(ename) {
    var mymessage = "Name passed is : " +
        ename;
    return mymessage;
}
function collectMyData(ename, age) {
    var transactionStatus = false;
    if ((ename != "" && ename.length > 0) && (age >= 18 && age <= 60)) {
        transactionStatus = true;
    }
    return transactionStatus;
}
