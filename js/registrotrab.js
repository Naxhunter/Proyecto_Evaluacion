
function validar_trabajador(){
    
    var validar = rut();
    if(validar==false){
        return false;
    }
    validar = email();
    if(validar==false){
        return false;
    }
    validar = nombre();
    if(validar==false){
        return false;
    }
    validar = contra();
    if(validar==false){
        return false;
    }
    validar = especialidad();
    if(validar==false){
        return false;
    }
    validar = telefono();
    if(validar==false){
        return false;
    }
    return true;
}
function rut(){
var rut = document.getElementById('rut').value;
var num = 3;
var suma = 0;
for (let index = 0; index < 8; index++) {
    var caracter = rut.slice(index,index+1);
    suma = suma + ( caracter * num );
    num = num -1;
    if (num == 1) {
        num = 7;
    }
}
var resto = suma % 11;
var dv = 11 - resto;
if ( dv > 9) {
    if ( dv == 10) {
        dv ='K';
    }else{
        dv = 0;
    }
}
var dv_usuario = rut.slice(-1).toUpperCase();
if ( dv != dv_usuario ) {
    var error = "rut inválido. ";
    document.getElementById('error_0').innerHTML = error;
    return false;

}
return true;
}
function email(){
var email = document.getElementById('email').value;
var dos = email.length;
if(dos<6){
    var texto = "";
    var error = "Su email no puede tener menos de 6 caracteres.";
    document.getElementById('error_1').innerHTML = error;
    return false;
}
return true;
}
function nombre(){
var name_user = document.getElementById('name').value;
var num_user = name_user.length;
if(num_user < 3 || num_user >30){
    var texto = "";
    var error = "Mínimo 3 caracteres para el nombre y máximo 30 caracteres."
    document.getElementById('error_2').innerHTML = error;
    return false;
}
return true;
}
function contra(){
var pass_user = document.getElementById('pass').value;
var num_pass = pass_user.length;
if(num_pass < 8 || num_pass >30){
    var texto = "";
    var error = "Mínimo 8 caracteres para la contraseña y máximo 30 caracteres."
    document.getElementById('error_3').innerHTML = error;
    return false;
}
return true;
}
function especialidad(){
var esp_user = document.getElementById('especialidad').value;
var num_esp = esp_user.length;
if(num_esp < 5){
    var texto = "";
    var error = "Inserte al menos 5 caracteres para especialidad.";
    document.getElementById('error_4').innerHTML = error;
    return false;
}
return true;
}
function telefono(){
var tel_user = document.getElementById('telefono').value;
var num_tel = tel_user.length;
if(num_tel<8 || num_tel>8){
    var texto = "";
    var error = "Inserte 8 digítos. ";
    document.getElementById('error_5').innerHTML = error;
    return false;
}
for (let index = 0; index <= num_tel ; index++) {
    var cont = 0;
    var caracter = tel_user.slice(index,index+1);
    if(caracter == 1){
        cont = cont+1;
    }
    else if(caracter == 2){
        cont = cont+1;
    }
    else if(caracter == 3){
        cont = cont+1;
    }
    else if(caracter == 4){
        cont = cont+1;
    }
    else if(caracter == 5){
        cont = cont+1;
    }
    else if(caracter == 6){
        cont = cont+1;
    }
    else if(caracter == 7){
        cont = cont+1;
    }
    else if(caracter == 8){
        cont = cont+1;
    }
    else if(caracter == 9){
        cont = cont+1;
    }
    else if(caracter == 0){
        cont = cont+1;
    }
    else{
        var texto = "";
        var error = "No inserte caracteres, solamente números. ";
        document.getElementById('error_5').innerHTML = error;
        index = num_tel+1;
        return false;
    }
}
return true;
}