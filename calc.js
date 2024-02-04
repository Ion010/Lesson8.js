let a = document.getElementById("input1").value;
let b = document.getElementById("input2").value;
let c = document.getElementById("inputOp").value;
a = parseInt(a);
b = parseInt(b);

function mainFunction(){
    if (c == "+"){
        result = a + b;
        console.log(result);
    }else if (c == "-"){
        result = calcMinus(a, b);
        console.log(result);
    }else if (c == "*"){
        result = calcMultiply(a, b);
        console.log(result);
    }else if (c == "/"){
        result = calcDiv(a, b);
        console.log(result);
    }
}
// window.onload = document.getElementById("res").innerHTML = ;