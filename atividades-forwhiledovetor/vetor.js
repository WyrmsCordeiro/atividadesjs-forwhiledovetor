//  Lista 04 — Vetores (Resolva 1 exercício):
//  Dado um vetor contendo 10 números inteiros não ordenados e não repetidos,
//  construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário
//  irá digitar um número e o programa deve exibir na tela a posição deste número
//  no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!”
//  deve ser exibida na tela. 

const entrada = require("readline-sync");

let vet = [2,5,1,3,4,9,7,8,10,6]
let numero = entrada.questionInt("Digite o numero que voce deseja encontrar: ");
let encontrado = false;

for(let i = 0; i < vet.length; i++){
    if(vet[i] === numero) {
        console.log("O numero " + numero + " está localizado na posicao: " + i);
        encontrado = true;
    }
}

if(!encontrado){
    console.log("O numero " + numero + " não foi encontrado!");
}