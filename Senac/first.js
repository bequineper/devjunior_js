
let prompt = require('prompt-sync')();

let pl = 15 //Quantos anos para ter o valor investido em lucro levariam, valor justo de acordo com Graham: 15 anos
let pvp = 1.5 //Quantas vezes em relaçao ao valor da empresa voce tem que pagar para comprar ela, valor justo para graham: 1.5x
let multiplyer = (pvp*pl) //O multiplicador justo para graham, pode ser alterado de acordo com as preferências do usuário
let name = prompt('Escreva o nome da ação: ') //Escreva a sigla da ação, Ex: BBDC4
let lpa = prompt('Escreva o LPA da ação: ') // Escreva o LPA da ação (O lucro da empresa dividido pela quantidade de ações)
let vpa = prompt('Agora escreva o VPA da ação: ') //Escreva o VPA da ação (O valor da empresa dividido pela quantidade de ações)
let price = prompt('Agora escreva o preço da ação: ') //Escreva o preço da cota da ação.
console.log('=======================================');
console.log(' ');

let justprice  = (Math.sqrt(multiplyer*lpa*vpa)).toFixed(2)

if (justprice < price){
    console.log(`A ação ${name} esta cara, o preço justo seria R$${justprice}`);
}
else {
    console.log(`A ação ${name} esta barata, o preço justo seria R$${justprice}`);
}


