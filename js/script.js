let nombre = prompt("Introduce tu nombre");
let edad = prompt("Introduce tu edad");
edad=(Number(edad)*1);
if (edad>=18){
    alert(nombre+ ", eres mayor");
}
else if(isNaN(edad)){
    alert(nombre+ ", no introduciste un numero");
}
else{
    alert(nombre+ ", eres menor");
}




