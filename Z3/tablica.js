// Ispisuje tablicu množenja 10x10 u trenutni HTML dokument.
// Mora se pozvati tokom učitavanja stranice (document.write nakon učitavanja briše dokument).
function napraviTablicuMnozenja() {
  var velicina = 10;

  document.write("<table>");

  // Prvi red: zaglavlja kolona (X, 1, 2, ..., 10)
  document.write("<tr>");
  document.write("<th>X</th>");
  for (var j = 1; j <= velicina; j++) {
    document.write("<th>" + j + "</th>");
  }
  document.write("</tr>");

  // Ostali redovi: zaglavlje reda + proizvodi
  for (var i = 1; i <= velicina; i++) {
    // Parni redovi dobijaju klasu "parni" (žuta pozadina)
    if (i % 2 === 0) {
      document.write('<tr class="parni">');
    } else {
      document.write("<tr>");
    }

    document.write("<th>" + i + "</th>");
    for (var j = 1; j <= velicina; j++) {
      document.write("<td>" + (i * j) + "</td>");
    }

    document.write("</tr>");
  }

  document.write("</table>");
}
