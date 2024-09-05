function prepareData(){
  const cargoInp = document.querySelector("#newCargo");
  const descInp = document.querySelector("#newDesc");

  fetch(`../php/newCargo.php?cargo=${cargoInp}`)
}