function login(){
    var validar = emailval();
    if(validar==false){
        return false;
    }
    validar = contrval();
    if(validar==false){
        return false;
    }
    return true;
}


function emailval(){
    var email = document.getElementById('emaillog').value;
    var dos = email.length;
    if(dos<6){
        error = "Su email no puede tener menos de 6 caracteres.";
        document.getElementById('error_1').innerHTML = error;
        return false;
    }
}

function contrval(){
    var pass_user = document.getElementById('passlog').value;
    var num_pass = pass_user.length;
    if(num_pass < 8 || num_pass >30){
        error_1 = "";
        error = "Mínimo 8 caracteres para la contraseña y máximo 30 caracteres."
        document.getElementById('error_2').innerHTML = error;
        return false;
    }
    return true;
}