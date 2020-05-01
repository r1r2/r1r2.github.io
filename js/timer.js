function timer() {
    var d = new Date();
    var h = d.getDate();
    var m = d.getMonth() + 1;
    var s = d.getFullYear();
    document.getElementById("time").innerHTML = "DATE : " + h + "/" + m + "/" + s;
    setTimeout(timer, 50000);
}