/* 
5. Soma dos Ímpares
Desenvolva uma função somaImpares que recebe um array de números inteiros e retorna a soma de todos os números ímpares no array.

Exemplo de uso:
*/

function somaImpares(array) {
    let resultadoDaSoma = 0;
    array.forEach(element => {
        if (element % 2 === 1) {
            resultadoDaSoma += element;
        }
    });

    return resultadoDaSoma;
}

const numeros = [1, 2, 3, 4, 5, 6];
const soma = somaImpares(numeros);
console.log(soma); // Deverá imprimir 9 (1 + 3 + 5) 