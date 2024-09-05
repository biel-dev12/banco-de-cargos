function prepareData(){
  const cargoInp = document.querySelector("#newCargo");
  const descInp = document.querySelector("#newDesc");

  fetch(`../php/newCargo.php?cargo=${encodeURIComponent(cargoInp.value)}&desc=${encodeURIComponent(descInp.value)}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(`Cargo adicionado: ${data.cargo}`)
      console.log(`Descrição adicionada: ${data.desc}`)
    })
    .catch((error) => {
      console.log(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector("#addCargo");
  addButton.addEventListener("click", () => {
    console.log("clicou");
  });
});