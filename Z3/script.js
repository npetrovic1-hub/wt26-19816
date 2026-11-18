function napraviResurs(pocetnaKolicina) {
    
    let kolicina = (typeof pocetnaKolicina === "number" && pocetnaKolicina >= 0) ? pocetnaKolicina : 0;
    return {
        potrosi: function(trazena) {
            if (typeof trazena !== "number" || isNaN(trazena) || trazena < 0 || trazena > kolicina) {
                return false; 
            }
            kolicina -= trazena;
            return true;
        },
        preostalo: function() {
            return kolicina;   
        }
    };
}
const minute = napraviResurs(100);
const papiri = napraviResurs(20);
console.log(minute.preostalo());   
console.log(papiri.preostalo());  
console.log(minute.potrosi(30));  
console.log(minute.preostalo());   
console.log(papiri.preostalo());  
console.log(papiri.potrosi(25));  
console.log(papiri.preostalo()); 
console.log(papiri.potrosi(-5));  
console.log(papiri.preostalo());  
console.log(papiri.potrosi(20));   
console.log(papiri.preostalo());  
console.log(minute.preostalo());  