function napraviProfil() {
    let profil = { naziv: "Početni", brojPosjeta: 0 };
    return {
        pregled: function() {
            return { naziv: profil.naziv, brojPosjeta: profil.brojPosjeta };
        },
        postaviNaziv: function(n) { profil.naziv = n; },
        povecajPosjete: function() { profil.brojPosjeta++; }
    }
}
const modul = napraviProfil();
modul.povecajPosjete();
modul.povecajPosjete();
const kopija = modul.pregled();
kopija.brojPosjeta = 1000;
console.log(modul.pregled());