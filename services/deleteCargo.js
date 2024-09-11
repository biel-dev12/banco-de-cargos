function prepareData() {
  const deleteInp = document.querySelector("#deleteInp");

  if (!deleteInp.value.trim()) {
      document.querySelector(".msg").textContent = "Por favor, preencha o campo corretamente.";
      return;
  }

  const url = `../php/removeCargo.php?cargo=${encodeURIComponent(deleteInp.value)}`;

  fetch(url)
      .then((response) => response.json())
      .then((data) => {
          document.querySelector(".msg").textContent = data.message;
      })
      .catch((error) => {
          console.error("Erro ao deletar cargo:", error);
      });
}

document.addEventListener("DOMContentLoaded", () => {
  const deleteButton = document.querySelector("#deleteBtn");
  deleteButton.addEventListener("click", prepareData);
});
