
function myFunction() {
    var message, x;
    message = document.getElementById("MessageShower");
    message.innerHTML = "";
    x = document.getElementById("inputcontent").value;
    try { 
    if(x == "")  throw " This input is empty!";
    if(isNaN(x)) throw " This input is not a number!";
    x = Number(x);
    if(x < 0)  throw " This number is not valid!";
    if(x>0) throw " Thank you for believing in us!"

    }
    catch(err) {
    alert("The input you have put is " + x +"." + err);
    }
}
