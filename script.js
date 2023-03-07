//Exercício 1:
let soma = 0;
let indice = 13;
let count = 0;
while (count < indice) {
  count++;
  soma += count;
}
// soma = 91

//Exercício 2:
const btn = document.querySelector('.btn');
const resp = document.querySelector('.resposta');

const fibonacci = () => {
  let ultimo = 1;
  let penultimo = 0;
  let numero = 0;
  let numb = +document.getElementById('fibo').value;

  if (numb === 0 || numb === 1) resp.innerText = 'Pertence a sequencia';
  else {
    while (numb > numero) {
      numero = ultimo + penultimo;
      penultimo = ultimo;
      ultimo = numero;
    }
    if (numb === ultimo) resp.innerText = 'Pertence a sequência';
    else resp.innerText = 'Não pertence a sequência';
  }
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  fibonacci();
});

//Exercício 3:
//a - resposta 9, sequência de impares
//b - resposta 128, sempre o dobro da anterior
//c - resposta 49, sequência de número ao quadrado
//d - resposta 100, a sequência é de (nXn) sendo o n inicial de 2 e aumenta em 2 em cada posição
//e - resposta 13, sequência Fibonacci, soma dos 2 anteriores
//f - resposta 200. números naturais que começam com a letra d

//Exercício 4:
//a - no momento exato do cruzamento, os dois estão a mesma distancia da cidade, pois ocupam o mesmo ponto de distancia, após o cruzamento sempre o veiculo em direção a Ribeirão preto vai estar mais próximo, pois o outro está se afastando
//b - a função do tempo não interfere na resposta, pois no momento do encontro os dois estão na mesma distancia
//c - considerei as informações e a pergunta do enunciado: Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?, se ambos se encontram no mesmo ponto a distancia é a mesma, se for após o encontro é sempre o veiculo em direção a ribeirão.

//Exercício 5:
const btnInv = document.querySelector('.btn-invert');
const respInv = document.querySelector('.resposta-invert');

function inverter(str) {
  let novaStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    novaStr += str[i];
  }
  return (respInv.innerText = novaStr);
}

btnInv.addEventListener('click', (e) => {
  e.preventDefault();
  let str = document.getElementById('invert').value;
  inverter(str);
});
