// 1-10 = 15 feet. 10-20 = 12 feet. 20+ = 10 feet.
// 1 feet = 1000 brick

function brickCalculator(brick){
    if(brick <= 10){
        var total = brick * 15;
    }else if(brick > 10 && brick <= 20){
        var step1 = brick - 10;
        var resultStep1 = step1*12;
        var step2 = brick - step1;
        var resultStep2 = step3*15;
        var total2 = resultStep1 + resultStep2;
    }else{
        var step3 = brick - 20;
        var resultStep3 = step3*10;
        var step4 = brick - step3;
        var resultStep4 = 10*12;
        var resultStep5 = 10*15;
        var total3 = resultStep3 + resultStep5 + resultStep4;
    } return total, total2, total3;
}

var answer = brickCalculator(45);
var finalAnswer = answer*1000;
console.log("Total", finalAnswer, "Feet brick is needed for making this building");