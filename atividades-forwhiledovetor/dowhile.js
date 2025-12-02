//  Laço de Repetição DO… WHILE (Resolva 1 exercício):
//  Escreva um algoritmo, que leia números inteiros via teclado, até que o número
//  zero seja digitado. Ao final, mostre na tela a soma de todos os números 
//  digitados, que sejam positivos.

const entrada = require("readline-sync");

let numero;
let resultado = 0;

do { numero = entrada.questionInt("Digite um numero: ");

    if (numero > 0){
        resultado += numero;
    }

}   while (numero !== 0);

    console.log("A soma dos numeros positivos é: " + resultado);