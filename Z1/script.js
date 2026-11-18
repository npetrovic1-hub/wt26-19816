function dodajDva(broj){
    return broj+2;
}

function jednom(f) {
    let prvi = true;
    let rezultat;
    return function(){
        if (prvi){
            prvi = false;
            rezultat = f(...arguments);
        }
        return rezultat;
    }
}

const jednomFunkcija = jednom(dodajDva);
console.log(jednomFunkcija(4));
console.log(jednomFunkcija(6));
console.log(jednomFunkcija(8));