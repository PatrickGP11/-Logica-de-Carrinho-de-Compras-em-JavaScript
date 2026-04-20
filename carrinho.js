const carrinho = [
  { id: 1, nome: "Teclado Mecânico", preco: 350.00, categoria: "Periféricos", quantidade: 1 },
  { id: 2, nome: "Monitor 24 polegadas", preco: 899.90, categoria: "Monitores", quantidade: 2 },
  { id: 3, nome: "Mouse Gamer", preco: 150.00, categoria: "Periféricos", quantidade: 1 },
  { id: 4, nome: "Cabo HDMI", preco: 45.00, categoria: "Acessórios", quantidade: 3 }
];

// Passo 1 (Comentado com duas barras para o Node.js ignorar essa linha)
const apenasNomes = carrinho.map(function (produto) {
  return produto.nome;
});
// console.log(apenasNomes);


// Passo 2: O nosso filtro
const apenasPerifericos = carrinho.filter(function (produto) {
  return produto.categoria === "Periféricos";
});

//console.log(apenasPerifericos);

// Passo 3: O nosso caixa do supermercado (reduce)
const valorTotal = carrinho.reduce(function(calculadora, produto) {
  // A 'calculadora' guarda a soma atual. O 'produto' é o item passando na esteira.
  // Precisamos multiplicar o preço do produto pela quantidade dele, e somar na calculadora.
  
  return calculadora + (produto.preco * produto.quantidade);
  
}, 0); // Esse 0 no final é o valor inicial da calculadora.

console.log("O valor total do carrinho é: R$", valorTotal);