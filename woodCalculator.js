function woodCalculator(chair, table, bed){
    var chairFeet = chair * 1;
    var tableFeet = table * 3;
    var bedFeet = bed * 5;
    var totalCubicFeet = chairFeet + tableFeet + bedFeet;
    return totalCubicFeet;
}
var output = woodCalculator(130, 20, 30);
console.log("Total ",output,"Cubic Feet Wood is needed");