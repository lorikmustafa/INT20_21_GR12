function numri() {

  let numri = document.getElementById("numri").value;
  try {
    if(numri == "")  throw "empty";
    if(isNaN(numri)) throw "s eshte numer";
    // numri = Number(x);
    // if(x < 0)  throw "nuk pranojm numer negativ per numrin e telefonit";
    if(x < 0){
        alert("nuk pranojm numer negativ per numrin e telefonit");
    }
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }

}