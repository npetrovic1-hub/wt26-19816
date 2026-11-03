function ispis (brojPonavaljanja, pauze){
    for(var i = 0; i <= brojPonavaljanja; i++){
        console.log("Sat: " + i);
        if(i%pauze == 0){
            if(i != brojPonavaljanja)console.log("Pauza");
            else console.log("Zavrsna pauza");
        }
        else console.log("radi");
    }
}

var brojPonavaljanja = prompt("Unesite broj radnih sati: ");
var pauze = prompt("Nakon koliko radnih sati ide pauza: ");
ispis(brojPonavaljanja, pauze)