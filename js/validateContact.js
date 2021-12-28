function validateFormContact() {
    let name = document.forms["contact"]["name"].value;
    let email = document.forms["contact"]["email"].value;
    let subject = document.forms["subject"]["sub"].value;
    if (name == "" || email == "" || subject == "") {
        alert("Name, Email and Subject must be filled out");
        return false;
    }
}