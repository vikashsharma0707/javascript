

function display(num1, num2, num3) {
    let n = num1*num2*num3;
    let sign;

    if (n > 0) {
        sign = "positive";
    } else if (n < 0) {
        sign = "negative";
    } else {
        sign = "zero";
    }

    return sign;
}


let number1 = 2;
let number2 = -3;
let number3 = 5;

let result = display(number1, number2, number3);


alert("peoduct is : " + result);