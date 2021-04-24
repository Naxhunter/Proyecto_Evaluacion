function validar(){
    /*var validar_e = emailval();
    var validar_n = nameval();
    var validar_c = contrval();
    if (validar_e==false) {
        return false;
    }
    if (validar_n==false) {
        return false;
    }
    if (validar_c==false) {
        return false;
    }
    return true;*/
    var validar = emailval();
    if(validar==false){
        return false;
    }
    validar = nameval();
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
var email = document.getElementById('email').value;
/*console.log(email.length);*/
var dos = email.length;
/*console.log(dos);*/
if(dos<6){
    error = "Mínimo 6 caracteres para el email.";
    document.getElementById('error').innerHTML = error;
    return false;
}
return true;
}
function nameval(){
var name_user = document.getElementById('name').value;
var num_user = name_user.length;
if(num_user < 3 || num_user >30){
    error_1 = "";
    error = "Mínimo 3 caracteres para el nombre y máximo 30 caracteres."
    document.getElementById('error').innerHTML = error_1;
    document.getElementById('error_2').innerHTML = error;
    return false;
}
return true;
}
function contrval(){
    var pass_user = document.getElementById('pass').value;
    var num_pass = pass_user.length;
    if(num_pass < 8 || num_pass >30){
        error_1 = "";
        error = "Mínimo 8 caracteres para la contraseña y máximo 30 caracteres."
        document.getElementById('error').innerHTML = error_1;
        document.getElementById('error_2').innerHTML = error_1;
        document.getElementById('error_3').innerHTML = error;
        return false;
    }
    return true;
}
/*
var rut = document.getElementById('txtRut').value;
console.log('Su rut es:'+rut);
var num = 3;
var suma = 0;
for (let index = 0; index < 8; index++) {
    var caracter = rut.slice(index,index+1);
    console.log(caracter+ ' x '+num);
    suma = suma + ( caracter * num );
    num = num -1;
    if (num == 1) {
        num = 7;
    }
}
console.log('suma es:'+suma);
var resto = suma % 11;
console.log('resto:'+resto);
var dv = 11 - resto;
if ( dv > 9) {
    if ( dv == 10) {
        dv ='K';
    }else{
        dv = 0;
    }
}
console.log('dv:' + dv);
var dv_usuario = rut.slice(-1).toUpperCase();
if ( dv != dv_usuario ) {
    //alert('rut incorrecto');
    //Swal.fire('el rut es incorrecto');
    Swal.fire({
        icon: 'error',
        title: 'validacion rut',
        text: 'el rut es incorrecto, verifique'
      });
    return false;
}
return true;*/