const cardapio = [
    {
        codigo: 'cafe',
        descrição: "Café",
        valor: 3.00,
    },
    {
        codigo: 'chantily',
        descrição: 'Chantily (extra do Café)',
        valor: 1.50,
        extra: true,
        extraDo: 'cafe'
    },
    {
        codigo: 'suco',
        descrição: 'Suco Natural',
        valor: 6.20
    },
    {
        codigo: 'sanduiche',
        descrição: 'Sanduíche',
        valor: 6.50
    },
    {
        codigo: 'queijo',
        descrição: 'Queijo (extra do Sanduíche)',
        valor: 2.00,
        extra: true,
        extraDo: 'sanduiche'
    },
    {
        codigo: 'salgado',
        descrição: 'Salgado',
        valor: 7.25
    },
    {
        codigo: 'combo1',
        descrição: '1 Suco e 1 Sanduíche',
        valor: 9.50
    },
    {
        codigo: 'combo2',
        descrição: '1 Café e 1 Sanduíche',
        valor: 7.50
    }
]

export default cardapio;