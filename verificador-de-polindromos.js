console.log(`
4. Verificador de Palíndromos Desenvolva uma função ehPalindromo que verifica se uma string é um palíndromo. 
Um palíndromo é uma palavra ou frase que é a mesma, quer seja lida da esquerda para a direita ou da direita 
para a esquerda, ignorando espaços, pontuações e capitalização. Por exemplo, ehPalindromo("Ana") deve retornar true. \n
`);

function ehPalindromo(palavra) {
    let converterPalavraParaString = palavra.split(''); // Primeiro eu converti a palavra para string, e deixo todas as letras em minusculo:
    let comparar = converterPalavraParaString.reverse(); // Depois eu pego a conversão e uso o reverse() para inverter a ordem

    if (comparar.join('').toLowerCase() === palavra.toLowerCase()) // Para garantir a comparação das palavras eu uso a join('') para juntar a palavra e fazer a comparação
        return true;
    else
        return false;
}

let palavra = 'Ana';
const resposta = ehPalindromo(palavra);

console.log(resposta);
