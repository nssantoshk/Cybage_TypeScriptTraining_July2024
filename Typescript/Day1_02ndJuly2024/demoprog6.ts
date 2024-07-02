var nameLists:string[]=[];

function addMyNameToTheList(ename: string):boolean{
    var lengthCounter:number=nameLists.length;
    var transactionStatus:boolean=false;
    nameLists.push(ename);
    if(lengthCounter<nameLists.length){
        transactionStatus=true;
    }
    return transactionStatus;
}

function showAllNames():string{
    var nameMessage:string="No names listed currently";
    if(nameLists.length>0){
        nameMessage="";
        nameLists.forEach((namevalue)=>{
            nameMessage=nameMessage + "Name is : - " + namevalue + "\n";
        });
    }
    return nameMessage;
}


