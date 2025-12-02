//Lista 01 — Laço de Repetição FOR (Resolva 1 exercício):

//  Escreva um algoritmo, que leia 2 números inteiros via teclado,
//  onde o primeiro número deve ser menor do que o segundo número.
//  Caso contrário, deve ser exibida uma mensagem na tela informando
//  que o intervalo é inválido e sair do programa. 
//  No intervalo informado, mostre na tela todos os números que são 
//  múltiplos de 3 e 5. 

const entrada = require("readline-sync");

let numero1 = entrada.questionInt("Digite o primeiro numero do intervalo: ");
let numero2 = entrada.questionInt("Digite o segundo numero do intervalo: ");

if (numero1 >= numero2){
    console.log("Intervalo invalido!");
}

for(i = numero1; i <= numero2; i++){
    if (i % 3 === 0 && i % 5 ===0){
        console.log(i + " é multiplo de 3 e 5");
    }
}