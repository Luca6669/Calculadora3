let n1, n2, operacio;
function suma(){
     n1 = parseFloat(document.getElementById("pantalla").value)
     operacio = "+"
     document.getElementById("pantalla").value = ""
     document.getElementById("pantalla").focus();
}
function resta(){
    n1 = parseFloat(document.getElementById("pantalla").value)
     operacio = "-"
     document.getElementById("pantalla").value = ""
     document.getElementById("pantalla").focus();
}

function mult(){
    n1 = parseFloat(document.getElementById("pantalla").value)
     operacio = "*"
     document.getElementById("pantalla").value = ""
     document.getElementById("pantalla").focus();
}

function div(){
    n1 = parseFloat(document.getElementById("pantalla").value)
     operacio = "/"
     document.getElementById("pantalla").value = ""
     document.getElementById("pantalla").focus();
}

function arrel(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    resultat = Math.sqrt(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus();
}
function elev2(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    resultat = Math.pow(n1,2)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus();
}
function elev3(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    resultat = Math.pow(n1,3)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus();
}
function log(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    resultat = Math.log10(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus();
}
function cos(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    resultat = Math.cos(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus();
}
function sin(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    resultat = Math.sin(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus();
}
function tan(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    resultat = Math.tan(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus();
}
function ln(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    resultat = Math.log(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus();
}
function cero(){
document.getElementById("pantalla").value = document.getElementById("pantalla").value+"0"
}
function set(){
document.getElementById("pantalla").value = document.getElementById("pantalla").value+"7"
}
function nou(){
document.getElementById("pantalla").value = document.getElementById("pantalla").value+"9"
}
function vuit(){
 document.getElementById("pantalla").value = document.getElementById("pantalla").value+"8"
}
function sis(){
document.getElementById("pantalla").value = document.getElementById("pantalla").value+"6"
}    
function cinc(){
document.getElementById("pantalla").value = document.getElementById("pantalla").value+"5"
}    
function quatre(){
document.getElementById("pantalla").value = document.getElementById("pantalla").value+"4"
}    
function tres(){
document.getElementById("pantalla").value = document.getElementById("pantalla").value+"3"
}    
function dos(){
document.getElementById("pantalla").value = document.getElementById("pantalla").value+"2"
}    
function un(){
document.getElementById("pantalla").value = document.getElementById("pantalla").value+"1"
}    

function calcula() {
    let resultat;
    n2 = parseFloat(document.getElementById("pantalla").value)

    if(operacio=="+"){
        resultat = n1+n2
        document.getElementById("pantalla").value = resultat
    }
    if(operacio=="-"){
        resultat = n1-n2
        document.getElementById("pantalla").value = resultat
    }
    if(operacio=="*"){
        resultat = n1*n2
        document.getElementById("pantalla").value = resultat
    }
    if(operacio=="/"){
        resultat = n1/n2
        document.getElementById("pantalla").value = resultat
    }
}
