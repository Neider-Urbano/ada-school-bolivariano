export function validarLoginDos(value){
        var error=""
        if(value==="" || value===0){
            error="username required"
        }
        if(value.length>15){
            error="username too long"
        }
        return error;
}

export function validateFormBooking(name,value){
        var error="";
        if(value==="city" || value==="0"){
          value="";
        }
        if(value===""){
          error=name+" required"
        }
        return error;
}