/* 
3. Filtrando Strings por Tamanho Mínimo
Considere a seguinte função filtrarStringsCurtas em JavaScript:
 */

function filtrarStringsCurtas(strings, tamanhoMinimo) {
    return strings.filter(string => string.length >= tamanhoMinimo);
}

/* 
Dado o uso da função com o seguinte array e tamanho mínimo:

const palavras = ["sol", "lua", "estrela", "planeta", "galáxia"];
const resultado = filtrarStringsCurtas(palavras, 5);
Qual será o resultado impresso no console? Escolha a opção correta:

a) ["sol", "lua", "estrela"]
b) ["estrela", "planeta"]
c) ["estrela", "planeta", "galáxia"]
d) ["sol", "lua", "galáxia"]
e) ["lua", "estrela", "planeta"]

 */

const resposta = 'C) ["estrela", "planeta", "galáxia"]';
console.log(`A resposta correta é alternativa ${resposta}`);