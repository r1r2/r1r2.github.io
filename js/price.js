
function calculate() {
    var item = document.getElementById('item').value;
    var rate = (document.getElementById('rate').value);
    var quantity = (document.getElementById('quantity').value);
     var total = rate * quantity;

    document.getElementById('item').innerHTML = item;
    document.getElementById('rate').innerHTML = rate;
    document.getElementById('quantity').innerHTML = quantity;
    //document.getElementById('total').innerHTML = total;



    var table = document.getElementById('sampleTable');
    var rowCount = table.rows.length;
    var cellCount = table.rows[0].cells.length;


    var x = document.getElementById('sampleTable').insertRow(-1);
    var a = x.insertCell(0);
    var b = x.insertCell(1);
    var c = x.insertCell(2);
    var d = x.insertCell(3);
    var e = x.insertCell(4);

    a.innerHTML = rowCount-1;
    b.innerHTML = item;
    c.innerHTML = rate;
    d.innerHTML = quantity;
    e.innerHTML = total;

    var addition = total;
    //document.getElementById('val').innerHTML = addition;
    sum();

    return false;
}



document.getElementById('price').addEventListener('click', calculate); 