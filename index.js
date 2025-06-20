const lista = ['', "./Audio/Audiocap25.mp3", './Audio/cap 26.ogg', './Audio/Audiocap27.mp3', './Audio/cap28.ogg']
const listaTexto = ["The little prince", "Chapter 25", "Chapter 26", "Chapter 27", "Chapter 28"]
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const audio = document.getElementById('meuAudio');
const texto = document.getElementById('descricao-pagina')
console.log(lista);
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();
        SelecionarBotaoCarrossel(botao);

        EscondeImagemAtiva();
        MostrarImagemDeFundo(indice);
        MudarAudio(indice);
        MudarTexto(indice);

    })
})

function MudarTexto(indice) {
    texto.textContent = listaTexto[indice];
}
function MudarAudio(indice) {
    audio.src = lista[indice]
    audio.load();
}
function EscondeImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function MostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function SelecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}