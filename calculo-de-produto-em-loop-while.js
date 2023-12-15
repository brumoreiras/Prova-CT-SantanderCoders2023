/*
1. Cálculo de Produto em Loop While
Qual é o valor final da variável 'produto' após a execução do seguinte loop 'while' em JavaScript?
*/

let produto = 1;
let fator = 3;

while (fator <= 10) {
  produto *= fator;
  fator += 2;
}

/*
Escolha a opção correta:
a) 90
b) 105
c) 945
d) 60
e) 120
*/

const resposta = 'C) 945';
console.log(`A resposta correta é alternativa ${resposta}`);
