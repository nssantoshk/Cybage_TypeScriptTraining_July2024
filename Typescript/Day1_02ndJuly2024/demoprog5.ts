function greetUser():void{
    console.log("Function greetUser invoked");
}

function getMyName(ename:string):string{
    var mymessage:string="Name passed is : " + 
    ename;
    return mymessage;
}

function collectMyData(ename: string,
    age: number):boolean{
        var transactionStatus=false;
        if((ename!="" && ename.length>0)&&(age>=18 && age<=60)){
            transactionStatus=true;
        }
        return transactionStatus;
    }