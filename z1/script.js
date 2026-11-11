var kartice = document.querySelectorAll(".kartica");
var sazetak = document.getElementById("sazetak");

function osvjezi() {
  var gotovo = document.querySelectorAll(".kartica.gotovo").length;
  sazetak.textContent = "Završeno: " + gotovo + " od " + kartice.length;
}

function promijeni(kartica) {
  kartica.classList.toggle("gotovo");
  var stanje = kartica.querySelector(".stanje");
  if (kartica.classList.contains("gotovo")) {
    stanje.textContent = "(završeno)";
  } else {
    stanje.textContent = "(nezavršeno)";
  }
  osvjezi();
}

for (var i = 0; i < kartice.length; i++) {
  kartice[i].addEventListener("click", function () {
    promijeni(this);
  });
}

document.getElementById("reset").addEventListener("click", function () {
  for (var i = 0; i < kartice.length; i++) {
    kartice[i].classList.remove("gotovo");
    kartice[i].querySelector(".stanje").textContent = "(nezavršeno)";
  }
  osvjezi();
});

osvjezi();