/**
 * Desafio: escrever uma função que conte quantas maneiras diferentes de representar um valor com um numero determinado de moedas.
 * A função irá receber um valor inteiro, um array contendo o valor das moedas disponiveis, e deve retornar um inteiro informando a quantidade de variacoes diferentes de que pode ser utiliza para representar o valor recebido com as moedas disponiveis.
 * Por exemplo, chamando `variacoes(4, [1,2])` vamos ter:
 * `1+1+1+1`, `1+1+2`, `2+2`, entao o resultado da funcao deve ser `3`.
 *
 * Não existe um número determinado de moedas.
 * Você deve pegar o valor recebido e contar quantas variações únicas de moedas representam aquele valor.
 *
 * Voce pode testar o seu codigo rodando o comando `npm test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @param valor valor (dinheiro)
 * @param moedas array uni-direcional de inteiros, contendo os valores das moedas disponiveis
 * @returns inteiro informando a quantidade de variações possíveis para representar o valor com as moedas
 */
function variacoes(valor, moedas) {
  let particaoInteiros = Array(valor + 1).fill(0);
  // console.log(particaoInteiros);
  particaoInteiros[0] = 1;
  // console.log(particaoInteiros,moedas.length);
  for (let i = 0; i < moedas.length; i++) {
    for (let j = moedas[i]; j <= valor; j++) {
      particaoInteiros[j] += particaoInteiros[j - moedas[i]];
    }
  }
  // console.log(particaoInteiros);
  return particaoInteiros[valor];
}

module.exports = variacoes;
