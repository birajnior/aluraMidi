function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if (elemento != null && elemento.localName === "audio") {
        elemento.play()
    } else {
        console.log("Elemento não encontrado ou seletor inválido!")
    }
}

const listaDeTeclas = document.querySelectorAll(".tecla")

/*let contador = 0
while (contador < listaDeTeclas.length) {
    const teclas = listaDeTeclas[contador]
    const instrumento = teclas.classList[1]
    
    const idAudio = `#som_${instrumento}`
    
    teclas.onclick = function () {
        tocaSom(idAudio)
    }

    contador = contador + 1   
}*/

for (let i = 0; i < listaDeTeclas.length; i++) {
    const teclas = listaDeTeclas[i]
    const instrumento = teclas.classList[1]
    const idAudio = `#som_${instrumento}`

    teclas.onclick = function () {
        tocaSom(idAudio)
    }

    teclas.onkeydown = function (event) {
        console.log(event.code);

        if (event.code === 'Space' || event.code === 'Enter') {
            teclas.classList.add("ativa")
        }
    }

    teclas.onkeyup = function () {
        teclas.classList.remove("ativa")
    }
}

