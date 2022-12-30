function feetToMile(num){
    if(num < 0){
        console.log("Feet can't be negative. Type positive number and try again.");
    }else{
        var mile = num / 5280 ;
        var customizedMile = mile.toFixed(5);
        return customizedMile;
    }
}

var result = feetToMile(-3000);
console.log("The answer is = ",result, "mile");