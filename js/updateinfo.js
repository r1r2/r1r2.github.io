

function newupdate() {
    var name = (document.getElementById('name').value);
    var company = (document.getElementById('company').value);
    var address = (document.getElementById('address').value);
    var contact = (document.getElementById('contact').value);
    var invoice = (document.getElementById('invoice').value);
    var customerid = (document.getElementById('customerid').value);

    document.getElementById('resultname').innerHTML = "NAME : " + name;
    document.getElementById('resultcompany').innerHTML = "COMPANY : " + company;
    document.getElementById('resultaddress').innerHTML =  "ADDRESS : "+ address;
    document.getElementById('resultcontact').innerHTML = "CONTACT : " + contact;
    document.getElementById('resultinvoice').innerHTML = "INVOICE# : " + invoice;
    document.getElementById('resultcustomerid').innerHTML = "CUSTOMER ID : " + customerid;

    return false;
}

document.getElementById('updateinfo').addEventListener('click', newupdate); 
