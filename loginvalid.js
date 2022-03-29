function validateEmail(event)
{
    
    var email = document.getElementById("log").value;
    alert(localStorage.getItem('email'));
    var pass=document.getElementById('in').value;

    if(email==localStorage.getItem('email') && pass==localStorage.getItem('password')){
        alert("login successfully");
        document.getElementById('user').innerHTML=email;
    }
    else{
        alert("invalid");
        event.preventDefault();
    }
}