var naslov = document.getElementById("naslov");
var tekst = document.getElementById("tekst");
var greska = document.getElementById("greska");
var pregled = document.getElementById("pregled");
var pNaslov = document.getElementById("p-naslov");
var pTekst = document.getElementById("p-tekst");
var pKategorija = document.getElementById("p-kategorija");

document.getElementById("dugme-pregled").addEventListener("click", function () {
  var n = naslov.value.trim();
  var t = tekst.value.trim();
  
  var odabrana = document.querySelector('input[name="kategorija"]:checked');
  pNaslov.textContent = n;
  pTekst.textContent = t;
  greska.textContent = t.length;
  pregled.className = odabrana.value;
  pKategorija.textContent = "Kategorija: " + odabrana.dataset.naziv;
});

document.getElementById("naslov").addEventListener("input", function (){
  greska.textContent = naslov.value.length;
})

document.getElementById("dugme-reset").addEventListener("click", function () {
  naslov.value = "";
  tekst.value = "";
  document.querySelector('input[name="kategorija"][value="informacija"]').checked = true;
  greska.textContent = tekst.length();
  pNaslov.textContent = "(nema pregleda)";
  pTekst.textContent = "";
  pKategorija.textContent = "";
  pregled.className = "";
});