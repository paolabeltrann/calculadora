
function getResult (){
 
    let numeroUno = Number(document.getElementById('numeroUno').value)
    let signo = document.getElementById('signo').value
    let numeroDos = Number(document.getElementById('numeroDos').value)
    console.log('log inicio')

    if (signo == "*") {

        document.getElementById("resultado").value = numeroUno*numeroDos
        
    } if(signo == "+"){

        document.getElementById("resultado").value = numeroUno+numeroDos

    } if(signo == "-"){

        document.getElementById("resultado").value = numeroUno-numeroDos

 } if(signo == "/"){

    document.getElementById("resultado").value = numeroUno/numeroDos


      }   
    
 
}

function getClear(){

    document.getElementById("resultado").value = ""
    document.getElementById("numeroUno").value = ""
    document.getElementById("numeroDos").value = ""
    document.getElementById("signo").value = ""
}