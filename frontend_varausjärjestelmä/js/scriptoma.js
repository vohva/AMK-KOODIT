function kysyNimi() {
   var doc = prompt("Kirjoita kenttään oma etunimesi isolla tai pienellä alkukirjaimella");
   if (doc != null) {
      document.getElementById("g").innerHTML =
         "Hei " + doc + "!";
   }
}

function viestiVahvistus() {
   swal("", "Viestisi on lähetetty!", "success");
}

function rekisterVahvistus() {
   swal("", "Saat hetken kuluttua ilmoittamaasi sähköpostiosoitteeseen vahvistuslinkin, jota klikkaamalla saat käyttäjätunnuksesi käyttöön!", "info");
}