"use strict";

function percentage() {
    var total = Number(document.getElementById('total').value);
    var dead = Number(document.getElementById('dead').value);
    var recover = Number(document.getElementById('recover').value);

    document.getElementById('resultdead').innerHTML = Math.round((dead/total)*100);
    document.getElementById('resultrecover').innerHTML = Math.round((recover/total)*100);
    
    return false;
}

document.getElementById('calculate').addEventListener('click', percentage);
