const PromptSync = require('prompt-sync');

let prompt = require('prompt-sync')();

// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }
// 
//===============================================================


// let c = 0;
// for (let i = 1; i < 101; i++){
//     c = (i+c)
//     console.log(`Actual number: ${i}, Actual Sum: ${c}`);
// }
//===============================================================

// let n = +prompt(`Escreva um numero de 1 a 10, e irei lhe retribuir a tabuada dele: `);
// for (let i = 1; i <= 10; i++){
    //     let t = (n*i);
    //     console.log(`Seu numero é ${n} e a tabuada de ${i} dele é: ${t}`);
    // }
    
//===============================================================

// const h = 30;
// while(true){
//     let ht = +prompt(`Escreva a altura total da sua escada em centimetros, e irei lhe dizer quantos degraus ela teria: `)
//     if (ht < 30){
//         console.log(`Escreva um numero maior que 30`);
//     }
//     else{
//         let degrees = Math.round(ht/h)
//         console.log(`Sua escada vai ter ${degrees} degraus`);
        
//     }
// }

//===============================================================


// const drop = 5;
// while(true){
//     let bottle = +prompt(`Escreva o volime total da sua garrafa em ml, e irei lhe dizer quantas gotas ela teria: `)
//     if (bottle < 5){
//         console.log(`Escreva um numero maior que 5`);
//     }
//     else{
//         let dropCount = Math.round(bottle/drop)
//         console.log(`Sua garrafa vai ter ${dropCount} gotas`);
//         break
//     }
// }
//===============================================================

// const random = Math.round(Math.random()*100);
// console.log(`Seu numero aleatório é ${random}`);

// for (let i = 0; i <= random; i++){
//     console.log(i);
// }

//===============================================================

// let n = +prompt(`Escreva um número: `);
// for (let i = 1; i <= n; i++){
//     console.log(`Olá!`); 
// }
//===============================================================

// const key = 17;
// let userKey = 0;
// while (!(userKey === key)) {
//     let userKey = +prompt(`Digite seu número de 0 a 20: `)
//     if (userKey === key) {
//         console.log(`Senha correta, meus parabens!`);
//         break
//     } else {
//         console.log(`Senha inválida, tente novamente.`);
//     }
// }

//===============================================================
// let i = 0;
// while (i <= 100){
//     let money = +prompt(`Adicione seu valor: `)
//     i = (money+i)
//     console.log(`Você já acumulou R$${i},00`);
// }
// console.log(`Voce conquistou mais de 100 reais!`);

//===============================================================

// let i = 50;
// while (i > 0){
//     let comer = +prompt(`Adicione quantas maças comer: `)
//     if (comer <= i){
//         i = (i-comer)
//         let comidas = (50-i)
//         console.log(`Você já comeu ${comidas} maçãs, restam ${i} maçãs!`);
//     }
//     else{
//         console.log(`Você nao pode comer mais maçãs do que você tem, tente novamente!`);
        
//     }
// }
// console.log(`Todas as maças foram comidas!`);

//===============================================================
// let total = 0
// let nota =  1 
// let counter = 0
// let media = 0
// while(nota > 0){
//     nota = +prompt(`Escreva a nota do aluno(digite uma nota negativa para calcular a média total): `)
//     counter++
//     total = (nota+total)
//     if(nota < 0){
//         counter--
//         total = (total-nota)
//         media = (total/counter)
//         break
//     }
// }
// console.log(`A média é ${media}`);

