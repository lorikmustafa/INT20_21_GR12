function validateFormContact() {
    let name = document.getElementById("emri").value;
    let email = document.getElementById("numri").value;
    let subject = document.getElementById("subject").value;
    let number = document.getElementById("numri").value;

    let re_number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name == "" || email == "" || subject == "" || numri == "") {
        alert("Emri, email, numri dhe subject duhet te plotesohen");
        return false;
    }
    
    if (re_email.test(email)) {
        // alert("done");
        return true;
    }
    else {
        alert("Nuk e keni shtypur email valid")
        return false;
    }

    if(re_number.test(number)){
        return true;
    }
    else {
        alert("Nuk keni shtypur numer valid")
    }
}

// function validate() {
//     var email = document.getElementById("email").value;
//     var re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (re_email.test(email)) {
//         // alert("done");
//         return true;
//     }
//     else {
//         alert("Nuk e keni ")
//     }
// }