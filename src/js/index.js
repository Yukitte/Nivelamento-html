const botoes = document.querySelectorAll('.botao');

botoes.forEach((botao, indice )=> {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPag();

        botao.classList.add("selecionado");

        planetas[indice].classList.add("selecionado");
      });
});

const planetas = document.querySelectorAll(".planeta")
function desselecionarPag() {
    const planetaSelecionado = document.querySelector(".planeta.selecionado");
    planetaSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

