  var redovi = document.getElementById("redovi");
  var nazivPolje = document.getElementById("naziv");
  var iznosPolje = document.getElementById("iznos");
  var greska = document.getElementById("greska");
  function osvjezi() {
    var zbir = 0;
    for (var i = 0; i < redovi.rows.length; i++) {
      zbir += Number(redovi.rows[i].cells[1].textContent);
    }
    document.getElementById("zbir").textContent = zbir.toFixed(2);
    document.getElementById("broj-stavki").textContent = "Zbir (stavki: " + redovi.rows.length + ")";
  }

  document.getElementById("dodaj").addEventListener("click", function () {
    var naziv = nazivPolje.value.trim();
    var iznosTekst = iznosPolje.value.trim().replace(",", ".");
    var iznos = Number(iznosTekst);

    if (naziv === "") {
      greska.textContent = "Greška: naziv ne smije biti prazan.";
      return;
    }
    if (iznosTekst === "" || isNaN(iznos) || !isFinite(iznos)) {
      greska.textContent = "Greška: iznos mora biti broj.";
      return;
    }
    if (iznos < 0) {
      greska.textContent = "Greška: iznos ne smije biti negativan.";
      return;
    }

    greska.textContent = "";
    var red = redovi.insertRow(-1);
    var celija1 = red.insertCell(0);
    var celija2 = red.insertCell(1);
    celija1.textContent = naziv;
    celija2.textContent = iznos.toFixed(2);
    celija2.className = "iznos";

    nazivPolje.value = "";
    iznosPolje.value = "";
    osvjezi();
  });

  osvjezi();