function validation() {
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var phone = document.getElementById('exampleInputPhone1').value;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}.[A-Za-z]{2,6}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;
    var phonecheck = /^[0,9]{10}$/;
    if (emailcheck.test(email)) {
        document.getElementById('erroremail').innerHTML = "";
    } else {
        document.getElementById('erroremail').innerHTML = "Invalid email";
        return false;
    }
    if (passwordcheck.test(password)) {
        document.getElementById('errorpassword').innerHTML = "";
    } else {
        document.getElementById('errorpassword').innerHTML = "Invalid password";
        return false;
    }
    if (phonecheck.test(phone)) {
        document.getElementById('errorphone').innerHTML = "";
    } else {
        document.getElementById('errorphone').innerHTML = "Invalid phone number ";
        return false;
    }

}