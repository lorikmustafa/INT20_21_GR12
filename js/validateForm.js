function validateForm() {
    let username = document.forms["login"]["username"].value;
    let password = document.forms["login"]["password"].value;
    if (username == "" || password == "") {
        alert("Username and password must be filled out");
        return false;
    }
}

{/* <script>
    function validateForm() {
        let username = document.forms["login"]["username"].value;
        let password = document.forms["login"]["password"].value;
        if (username == "" || password == "") {
            alert("Username and password must be filled out");
            return false;
        }
    }
</script> */}