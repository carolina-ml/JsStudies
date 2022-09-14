/*
1) Média artimética simples;
2) Média ponderada;
3) DESAFIO - o maior e o menor valor (você deve encontrar esse valor
de maneira dinâmica, já sabemos que notas[4].valor é o maior valor,
mas como encontrar isso dinamicamente?);

OBS: para rodar JavaScript: 
node filename.js 
*/

let notas = [
    {valor: 8.5, peso: 0.25},
    {valor: 9.9, peso: 0.95},
    {valor: 5, peso: 0.5},
    {valor: 2, peso: 0.25},
    {valor: 10, peso: 1},
    {valor: 5.5, peso: 0.25},
    {valor: 6, peso: 0.2},
    {valor: 9, peso: 0.75}
];
let somaAritimetica = 0;
//Aritmetica:
for (let i = 0; i < notas.length; i++) {
    somaAritimetica += notas[i].valor;
}
let somaPonderada = 0;
let somaPesos = 0;
// Ponderada
for (const nota of notas) {
    somaPesos = somaPesos + nota.peso;
    somaPonderada += (nota.peso * nota.valor);
}
let mediaA = somaAritimetica / notas.length
let mediaP = somaPonderada / somaPesos;

console.log("Média Aritmética: " + mediaA);
console.log("Média Ponderada: " + mediaP);

let maior = 0, menor = 10;
for (const atual of notas) {
    if (atual.valor > maior) maior = atual.valor;
    menor = atual.valor < menor ? atual.valor : menor;
}

console.log(`O maior valor é o ${maior} e o menor é o ${menor}`);
