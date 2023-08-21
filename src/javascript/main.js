const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    alert("Elemento não encontrado ou seletor inválido!!!");
  }
}

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.addEventListener("click", () => {
    tocaSom(idAudio);
  });

  tecla.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

// let contador = 0;
// while (contador < listaDeTeclas.length) {
//   const tecla = listaDeTeclas[contador];
//   const instrumento = tecla.classList[1];
//   const idAudio = `#som_${instrumento}`;

//   tecla.addEventListener("click", () => {
//     tocaSom(idAudio);
//   });
//   contador = contador + 1;
// }
