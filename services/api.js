function buscaCargo() {
  const input = document.querySelector("#searchInp");
  const cargoEl = document.querySelector(".cargo");
  const descEl = document.querySelector(".desc");
  const riscosEl = document.querySelector(".riscos");
  const examesEl = document.querySelector(".exames");
  const errorEl = document.querySelector(".error");

  fetch(`./php/busca_cargo.php?cargo=${encodeURIComponent(input.value)}`)
    .then((response) => response.json())
    .then((data) => {
      errorEl.innerHTML = "";
      cargoEl.innerHTML = data.cargo != undefined ? data.cargo : "";
      descEl.innerHTML =
        data.desc != undefined ? `<span>Descrição:</span> ${data.desc}` : "";
      riscosEl.innerHTML =
        data.riscos != undefined ? `<span>Riscos:</span> ${data.riscos}` : "";
      examesEl.innerHTML =
        data.exames != undefined ? `<span>Exames:</span> ${data.exames}` : "";
      if (data.cargo == undefined) {
        cargoEl.innerHTML = "";
        descEl.innerHTML = "";
        riscosEl.innerHTML = "";
        examesEl.innerHTML = "";
        errorEl.innerHTML = `Cargo ${searchInp.value} não encontrado!`;
      }
    })
    .catch((error) => {
      console.log(error);

      errorEl.innerText = `Cargo ${searchInp.value} não encontrado!`;
    });
}

document.getElementById("searchBtn").addEventListener("click", buscaCargo);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    buscaCargo();
  }
});
