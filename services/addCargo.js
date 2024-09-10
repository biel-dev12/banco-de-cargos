function prepareData() {
  const cargoInp = document.querySelector("#newCargo");
  const descInp = document.querySelector("#newDesc");

  if (!cargoInp.value.trim() || !descInp.value.trim()) {
    document.querySelector(".error").textContent =
      "Por favor, preencha todos os campos.";

    return;
  } else if (descInp.value.length <= 80) {
    document.querySelector(".error").textContent =
      "Descrição não tem tamanho suficiente para ser atribuída a um cargo, preencha corretamente.";

    return;
  } else if (cargoInp.value.length <= 3) {
    document.querySelector(".error").textContent =
      "Cargo não tem tamanho suficiente para ser atribuída a um cargo, preencha corretamente.";

    return;
  }

  const url = `../php/newCargo.php?cargo=${encodeURIComponent(
    cargoInp.value
  )}&desc=${encodeURIComponent(descInp.value)}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        document.querySelector(
          ".cargo"
        ).textContent = `Cargo adicionado: ${data.cargo}`;
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
