var nameLists = [];
function addMyNameToTheList(ename) {
    var lengthCounter = nameLists.length;
    var transactionStatus = false;
    nameLists.push(ename);
    if (lengthCounter < nameLists.length) {
        transactionStatus = true;
    }
    return transactionStatus;
}
function showAllNames() {
    var nameMessage = "No names listed currently";
    if (nameLists.length > 0) {
        nameMessage = "";
        nameLists.forEach(function (namevalue) {
            nameMessage = nameMessage + "Name is : - " + namevalue + "\n";
        });
    }
    return nameMessage;
}
console.log(showAllNames());
addMyNameToTheList("Jojo");
addMyNameToTheList("Popat Lal");
addMyNameToTheList("Santa Singh");
addMyNameToTheList("Banta Singh");
addMyNameToTheList("Sohan Lal");
addMyNameToTheList("Mohan Singh");
console.log(showAllNames());
