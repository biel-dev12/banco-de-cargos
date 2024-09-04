<?php
include_once("./php/config.php");
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <title>Banco de Cargos</title>
  <link rel="stylesheet" href="./css/styles.css" />
  <link rel="stylesheet" href="./css/menuHamb.css" />
  <link
    rel="shortcut icon"
    href="./imgs/fav-doctors.svg"
    type="image/x-icon" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <script src="./services/api.js" type="text/javascript" defer></script>
</head>

<body>
  <!-- <header></header> -->
  <main id="main-content">
    <div class="border">
      <section class="container">
        <div class="options">
          <div id="menu">
            <div id="menu-bar" onclick="menuOnClick()">
              <div id="bar1" class="bar"></div>
              <div id="bar2" class="bar"></div>
              <div id="bar3" class="bar"></div>
            </div>
            <nav class="nav" id="nav">
              <ul>
                <li><a href="" class="current"><i class="bi bi-search"></i>Pesquisar</a></li>
                <li><a href="./pages/addCargo.php"><i class="bi bi-plus-circle"></i>Adicionar</a></li>
                <li><a href="#"><i class="bi bi-trash3-fill"></i>Remover</a></li>
              </ul>
            </nav>
          </div>
          <div class="menu-bg" id="menu-bg"></div>
        </div>

        <main class="form-box">
          <section class="title">
            <h1>Banco de Cargos</h1>
          </section>
          <section class="search">
            <label for="searchInp">Digite o cargo:</label>
            <input type="text" id="searchInp" class="inp" placeholder="Ex: Porteiro" />
            <button type="submit" id="searchBtn" class="submit">Pesquisar</button>
          </section>
          <div id="print">
            <p class="error"></p>
            <p class="cargo"></p>
            <p class="desc"></p>
            <p class="riscos"></p>
            <p class="exames"></p>
          </div>
        </main>
      </section>
    </div>
  </main>

  <script src="./services/menuHamb.js"></script>
</body>

</html>