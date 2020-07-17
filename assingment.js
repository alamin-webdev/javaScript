// feetToMile
function feetToMile(feet){
    if(feet <= 0 || feet == null){
        var warning = "Please, enter a valid number.";
        return warning;  
    }
    var mile = feet * 0.00018939;
    return mile;
}   



 // woodCalculator
function woodCalculator(chair,table,bed){
    const woodForChair = chair*1;
    const woodForTable = table*3;
    const woodForBed = bed*5;
    const totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}


//brickCalculator
function brickCalculator(floorsOfBuilding){
    if (floorsOfBuilding <= 10) {
        var brick = floorsOfBuilding * 15;
    }
     if(floorsOfBuilding > 10 && floorsOfBuilding <= 20){
        var brick = floorsOfBuilding * 12;
    }
     if(floorsOfBuilding > 10 && floorsOfBuilding > 20){
        var brick = floorsOfBuilding * 10;
    }
    return brick;
}




//tinyFriend
function tinyFriend(friendsName){
   var tinyName = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        var nowTinyName = friendsName[i];
        if(nowTinyName.length < tinyName.length){
            tinyName = nowTinyName;
        }       
    }
    return tinyName;
}








