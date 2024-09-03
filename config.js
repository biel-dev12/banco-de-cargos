fetch('./db.json')
    .then(response => {
      return response.json();
    })
    .then(jsondata => console.log(jsondata.idade));

document.addEventListener("DOMContentLoaded", function () {
  const jsond = document.getElementById("jsonD").textContent;
  const data = JSON.parse(jsond);

  const searchInp = document.getElementById("searchInp");
  const searchBtn = document.getElementById("searchBtn");
  const cargoEl = document.querySelector(".cargo");
  const descEl = document.querySelector(".desc");
  const riscosEl = document.querySelector(".riscos");
  const examesEl = document.querySelector(".exames");
  const errorEl = document.querySelector(".error");

  function search() {
    const query = searchInp.value.toLowerCase();
    const result = data.find((q) => q.cargo.toLowerCase() === query);

    if (result) {
      errorEl.innerHTML = "";
      cargoEl.innerHTML = result.cargo;
      descEl.innerHTML = `<span>Descrição:</span> ${result.desc}`;
      riscosEl.innerHTML = result.riscos
	  ? `<span>Riscos:</span> ${result.riscos}`
	  : "";
      examesEl.innerHTML = result.exams
        ? `<span>Exames:</span> ${result.exams}`
        : "";
    } else {
      cargoEl.innerHTML = "";
      descEl.innerHTML = "";
      riscosEl.innerHTML = "";
      examesEl.innerHTML = "";
      errorEl.innerHTML = `Cargo ${searchInp.value} não encontrado!`;
    }
  }

  searchBtn.addEventListener("click", search);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      search();
    }
  });
});


