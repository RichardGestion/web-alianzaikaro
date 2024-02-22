var attempt_3
function validate(){
    var usuar=document.getElementById("usuar").value;
    var password=document.getElementById("password").value;
    if(usuar=="jairo"&& password=="13685427"){
        alert("Ingreso exitosamente");
        window.location="/index.html";
        return false;

    } if(usuar=="nancy"&& password=="13580395"){
        alert("Ingreso existosamente");
        window.location="/index.html";
        return false;

    } if(usuar=="mario"&& password=="16899411"){
        alert("Ingreso existosamente");
        window.location="/index.html";
        return false;

    } if(usuar=="gerencia-sms"&& password=="18755614"){
        alert("Ingreso existosamente");
        window.location="/index.html";
        return false;

    } if(usuar=="felipe"&& password=="6206613"){
        alert("Ingreso existosamente");
        window.location="/index.html";
        return false;

    } if(usuar=="juan"&& password=="13582684"){
        alert("Ingreso existosamente");
        window.location="/index.html";
        return false;

    } if(usuar=="alberto"&& password=="13338931"){
        alert("Ingreso existosamente");
        window.location="/index.html";
        return false;

    } if(usuar=="estacion"&& password=="miq"){
        alert("Ingreso existosamente");
        window.location="/index.html";
        return false;

    } if(usuar=="estacion"&& password=="lsp"){
        alert("Ingreso existosamente");
        window.location="/index.html";
        return false;

    } if(usuar=="estacion"&& password=="vig"){
        alert("Ingreso existosamente");
        window.location="/index.html";
        return false;

    } if(usuar=="estacion"&& password=="svg"){
        alert("Ingreso existosamente");
        window.location="/index.html";
        return false;

    } if(usuar=="rrhh"&& password=="123"){
        alert("Ingreso existosamente");
        window.location="/index.html";
        return false;

    }
    else{
    attempt_3--;
    }
    alert("Te queda" +attempt+ "intento mas")
    if(attempt==0){
        document.getElementById("usuar").disable=true;
        document.getElementById("password").disable=true;
        document.getElementById("sumbit").disable=true;
    }
    
}


