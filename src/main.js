import CaixaDaLanchonete from "./caixa-da-lanchonete.js";

const form = document.getElementById('form');
const calcularBtn = document.getElementById('calcular-btn');
const valor = document.getElementById('valor');
const carrinhoDiv = document.getElementById('carrinho');
const codigoInput = document.getElementById('codigo');
const quantidadeInput = document.getElementById('quantidade');
const listItens = [];

calcularBtn.addEventListener('click', () => {
    const metodoDePagamento = form.metodo.value;
    const codigo = codigoInput.value
    const quantidade = quantidadeInput.value;
    const item = codigo + ',' + quantidade;
    listItens.push(item);

    const caixa = new CaixaDaLanchonete();
    const resultado = caixa.calcularValorDaCompra(metodoDePagamento, listItens);
    valor.innerHTML = resultado;

    codigoInput.value = '';
    quantidadeInput.value = '';
})