const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

//Retornar um array apenas com os preços

const valores = carrinho.map(function(e){
    return JSON.parse(e)
}).map(function(e){
    return e.preco
})

console.log(valores)