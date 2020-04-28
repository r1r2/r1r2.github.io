
"use strict";

function percentage() {
    var dead = Number(document.getElementById('dead').value);
    var recover = Number(document.getElementById('recover').value);
    var serious = Number(document.getElementById('serious').value);
    var normal = Number(document.getElementById('normal').value);
    
    var total = dead + recover;
    var active = serious + normal;
    document.getElementById('resultdead').innerHTML = Math.round((dead/total)*100) + "  %";
    document.getElementById('resultrecover').innerHTML = Math.round((recover/total)*100) + "  %";
    document.getElementById('resultserious').innerHTML = Math.round((serious/active)*100) + "  %";
    document.getElementById('resultnormal').innerHTML = Math.round((normal/active)*100) + "  %";
    
    return false;
}

document.getElementById('calculate').addEventListener('click', percentage);

