
function percentage() {
    var dead = Number(document.getElementById('dead').value);
    var recover = Number(document.getElementById('recover').value);
    var serious = Number(document.getElementById('serious').value);
    var normal = Number(document.getElementById('normal').value);
    
    var total = dead + recover;
    var active = serious + normal;
    document.getElementById('resultdead').innerHTML ="DEATH : " + Math.round((dead/total)*100) + "  %";
    document.getElementById('resultrecover').innerHTML = "RECOVERED : " + Math.round((recover/total)*100) + "  %";
    document.getElementById('resultserious').innerHTML = "SERIOUS : " + Math.round((serious/active)*100) + "  %";
    document.getElementById('resultnormal').innerHTML = "NORMAL : " + Math.round((normal/active)*100) + "  %";
    
    return false;
}

document.getElementById('calculate').addEventListener('click', percentage);

