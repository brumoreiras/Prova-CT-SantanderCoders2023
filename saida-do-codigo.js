/* 
2. Saída do Código
Considere o seguinte trecho de código JavaScript:
 */

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(j);
  }
}

/* 
Qual será a saída desse código no console?
a) 1 2 3 4
b) 1 1 2 1 2 3 1 2 3 4
c) 1 2 2 3 3 4
d) 1 1 2 2 3 3 4 
*/

const resposta = 'B) 1 1 2 1 2 3 1 2 3 4'
console.log(`A resposta correta é alternativa ${resposta}`);