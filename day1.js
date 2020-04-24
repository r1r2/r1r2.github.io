"use strict";

function addValue(){

    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);

    var result=x+y;
    document.getElementById("result").value=result;
}

document.getElementById('addValue').addEventListener('click', add);