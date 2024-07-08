const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

/*- passo 2 - dar um jeito de identificar o clique do usuario na seta avançar*/
btnAvancar.addEventListener("click", function () {
    // ESSA LINHA FUNCIONA COMO UMA "ESCUTA" OU SEJA ELE TA ESPERANDO ALGO ACONTECER PARA EXECUTAR
    const ehUltimoCartao = cartaoAtual === cartoes.length -1;
    if (ehUltimoCartao) return;

    //- passo 4 - buscar o cartao que esta selecionado e esconder
    esconderCartoesSelecionado();

    // - passo 3 - fazer aparecer o proximo cartão da lista,colocando a classe selecionado nele

    cartaoAtual++;
    mostraCartao();
})

//aqui para baixo comeca o comando da seta voltar

btnVoltar.addEventListener("click", function () {
    // ESSA LINHA FUNCIONA COMO UMA "ESCUTA" OU SEJA ELE TA ESPERANDO ALGO ACONTECER PARA EXECUTAR

    const ehPrimeiroCartao = cartaoAtual ===0;
    if (ehPrimeiroCartao) return;

    esconderCartoesSelecionado();

    // - passo 3 - fazer aparecer o proximo cartão da lista,colocando a classe selecionado nele

    cartaoAtual--;
    mostraCartao();
})

function mostraCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoesSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
