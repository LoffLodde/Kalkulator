const display = document.querySelector(".display");
const knapper = document.querySelectorAll("button");
const opperatører = ["*", "/", "+", "-", "="];
let resultat = "";

const kalkuler = (knappVerdi) => {
  if (knappVerdi === "=" && resultat !== "") {
    resultat = eval(resultat.replace("%", "/100"));
  } else if (knappVerdi === "C") {
    resultat = "";
  } else if (knappVerdi === "CE") {
    resultat = resultat.toString().slice(0, -1);
  } else {
    if (knappVerdi === "" && opperatører.includes(knappVerdi)) return;
    resultat += knappVerdi;
  }

  display.value = resultat;
};

knapper.forEach((kanpp) => {
  kanpp.addEventListener("click", (e) => kalkuler(e.target.dataset.verdi));
});
