const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
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

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.addEventListener("click", () => {
    tocaSom(idAudio);
  });
}
