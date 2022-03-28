function validateEmail()
{
    var email = document.getElementById('email').value;
    if(/^[A-Za-z0-9]{4,}@[A-Za-z]{3,}.[A-Za-z]{2,}$/.test(email) == false)
        alert('Invalid email address');
}

function validatePassword()
{
    var password = document.getElementById('pwd').value;
    if(/[A-Z]{1,}[a-z]{1,}[0-9]{1,}/.test(password) && password.length >= 8 == false)
        alert('Invalid password');
}

function comparePassword()
{
    var newPassword = document.getElementById('pwd').value;
    var confirmPassword = document.getElementById('cnfp').value;
    if(newPassword != confirmPassword)
        alert('Confirm Password must be same as the password');
}