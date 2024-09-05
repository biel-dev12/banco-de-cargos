function prepareData(){
  const cargoInp = document.querySelector("#newCargo");
  const descInp = document.querySelector("#newDesc");

  if (!cargoInp.value.trim() || !descInp.value.trim()) {
    document.querySelector(".error").textContent = "Por favor, preencha todos os campos.";
    return;
  }

  const url = `../php/newCargo.php?cargo=${encodeURIComponent(cargoInp.value)}&desc=${encodeURIComponent(descInp.value)}`;
  console.log("URL da requisição:", url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log(`Cargo adicionado: ${data.cargo}`);
        console.log(`Descrição adicionada: ${data.desc}`);
        document.querySelector(".cargo").textContent = `Cargo adicionado: ${data.cargo}`;
        document.querySelector(".desc").textContent = `Descrição: ${data.desc}`;
      } else {
        document.querySelector(".error").textContent = data.message;
      }
    })
    .catch((error) => {
      console.error("Erro ao adicionar cargo:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector("#addCargo");
  addButton.addEventListener("click", prepareData);
});