function procijeni(vrijednost, granicaDonja, granicaGornja) {

    if (vrijednost > granicaGornja) return "Previse ljudi";
    if(vrijednost>=granicaDonja) return "Taman"
    return "Malo ljudi";
}


while(1){
    var granicaDonja = prompt("Unesite donju granicu: ")
    if(Number.isInteger(Number(granicaDonja))){
        if(Number(granicaDonja) > 0) break;
    }
}
while(1){
    var granicaGornja = prompt("Unesite gornju granicu: ")
    if(Number.isInteger(Number(granicaGornja))){
        if(Number(granicaGornja) > granicaDonja) break;
    }
}
while(1){
    var brLjudi = prompt("Unesite broj ljudi: ")
    if(Number.isInteger(Number(brLjudi)))break;
}
procijeni(brLjudi, granicaDonja, granicaGornja)