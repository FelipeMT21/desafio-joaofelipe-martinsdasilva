import cardapio from "./cardapio.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        // Definindo constantes para os descontos e acréscimos
        let desconto = 0.95;
        let acrescimo = 1.03;

        // Verificando o método de pagamento
        if (!['debito', 'credito', 'dinheiro'].includes(metodoDePagamento)) {
            return 'Forma de pagamento inválida!';
        } else if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let valorTotal = 0;
        let mensagensDeErro = [];

        // Iterando sobre os itens do carrinho
        itens.forEach(item => {
            const [codigo, quantidade] = item.split(',');
            const pedido = cardapio.find(item => item.codigo === codigo);

            if (!pedido) {
                return mensagensDeErro.push('Item inválido!');
            } else if (quantidade <= 0) {
                return mensagensDeErro.push('Quantidade inválida!');
            } else {
                // Verificando se o item extra precisa do item principal
                if (pedido.extra) {
                    const pedidoPrincipal = pedido.extraDo;
                    const principalNoCarrinho = itens.some(item => item.startsWith(pedidoPrincipal));

                    if (!principalNoCarrinho) {
                        return mensagensDeErro.push('Item extra não pode ser pedido sem o principal');
                    }
                }
            }
            // Calculando o valor total do pedido
            valorTotal += pedido.valor * parseInt(quantidade);
        })

        // Aplicando desconto ou acréscimo conforme o método de pagamento
        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= desconto;
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= acrescimo;
        }

        // Verificando se há mensagens de erro para retornar
        if (mensagensDeErro.length > 0) {
            return mensagensDeErro.join('/n');
        }

        // Retornando o valor total formatado
        return 'R$ ' + valorTotal.toFixed(2).replace('.', ',');

    }
}

export default CaixaDaLanchonete;