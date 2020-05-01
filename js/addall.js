  function sum() {
            let rows = document.querySelectorAll("table tr td:last-child");
            let sum = 0;
            for (let i = 0; i < rows.length; i++) {
                sum += Number(rows[i].textContent);
    
            }
    document.getElementById('val').innerHTML = "SUB-TOTAL : Rs. " + Math.round(sum);
    document.getElementById('vat').innerHTML = "VAT(13%) : Rs. " + Math.round(sum*0.13);
    document.getElementById('discount').innerHTML = "DISCOUNT(5%) : Rs. " + Math.round(sum*0.05);
    document.getElementById('grand').innerHTML = "GRAND TOTAL : Rs. " + (sum + Math.round(sum*0.13) - Math.round(sum*0.05));
        }
    //document.getElementById('summation').addEventListener('click', sum); 

    function deleterow(){
        var x = document.getElementById('sampleTable').deleteRow(-1);
        sum();
    }