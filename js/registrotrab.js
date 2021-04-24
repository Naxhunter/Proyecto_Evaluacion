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