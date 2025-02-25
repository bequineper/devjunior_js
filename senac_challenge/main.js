let scanner = require('prompt-sync')();

// while(true){
//     let hours = scanner('Digite um numero de horas que deseja ser convertida: ');
//     let minutes = (hours*60);

//     if (hours < 0) {
//         console.log('Entrada invalida, digite um numero de horas maior que 0')
//     }
//     else{
//         console.log(`Voce escreveu ${hours} horas, convertido fica ${minutes} minutos`);
//         break
//     }
// }

//----------------------------------------------------------------------------------------------

// while(true){
//     let name = scanner(`Escreva seu nome: `).trim()
//     if(name == ''){
//         console.log(`Entrada invalida, tente novamente.`);
//     }
//     else{
//         console.log(`Olá ${name}`);
//         break
//     }
// }

//---------------------------------------------------------------------------------------------------

// while(true){
//     let height = scanner(`Escreva uma altura: `)
//     let width = scanner(`Escreva uma largura: `)

//     let area = (height*width)

//     if (height > 0 || width > 0){
//         console.log(`O retangulo tem ${area}m2`);
//         break
//     }
//     else{
//         console.log(`Entrada invalida, tente novamente`);
        
//     }
// }

//---------------------------------------------------------------------------------------------------

// while(true){
//     let fTemp = scanner(`Digite sua temperatura em Fahrenheit: `)
//     let cTemp = ((fTemp-32)*5/9);

//     if(fTemp > 1000 || fTemp < -1000){
//         console.log(`Entrada invalida, tente novamente`);
//     }
//     else{
//         console.log(`Sua temperatura em celsius é ${cTemp}`);
//         break
//     }

// }

// ------------------------------------------------------------------------------------------------------

// console.log("Welcome to the JS calculator!");


// let number1 = prompt("Enter you first number: ")

// let number2 = prompt("Now, enter you second number: ")
// let loop = false
// let sum = (number1 + number2)
// let subtraction = (number1 - number2)
// let division = (number1 / number2)
// let multiplication = (number1 * number2)

// while(!loop){

//     let operation = prompt("What operation you wanna do? (+,-,/,*)")

//     switch (operation) {

//         case (operation == '+'):
//             let sumResult = (number1 + " + " + number2 + " = " + sum);
//             console.log(sumResult);
//             loop = true;
//             break;

//         case (operation == '-'):
//             let subResult = (number1 + " - " + number2 + " = " + subtraction);
//             console.log(subResult);
//             loop = true;
//             break;

//         case (operation == '/'):
//             let divResult = (number1 + " / " + number2 + " = " + division);
//             console.log(divResult);
//             break;

//         case (operation == '*'):
//             let multResult = (number1 + " * " + number2 + " = " + multiplication);
//             console.log(multResult);
//             loop = true;
//             break;

//         default:
//             console.log("Invalid option, try again:");
            
        
//     }
// }

//--------------------------------------------------------------------------------------------------
// while(true){
//     let price = scanner(`Digite a cotaçao do dolar de hoje: `)
//     let value = scanner(`Agora digite o valor em reais a ser convertido`)
//     let conversion = (value/price)

//     if (price <= 0){
//         console.log(`Cotaçao invalida, tente novamente`);       
//     }
//     else{
//         console.log(`Voce tera $${conversion}`);
//         break
//     }
// }

//-------------------------------------------------------------------------------------------------
// while(true){
    
//     let value = scanner(`Quanto foi o jantar? `)
//     let isGood = scanner(`O jantar foi bom? (Y/N) ` ).toLowerCase().charAt(0)

//     if (isGood == `y`){
//             value = (value+(10/100*value))
//             console.log(`O jantar foi BOM! E custou $${value}`);
//             break
//         }
//         else if (isGood == `n`){
//                 console.log(`O jantar foi RUIM! E custou $${value}`);
//                 break
//             }
//             else{
//                     console.log(`Entrada invalida, tente novamente`);
//                 }
            
//  }
            


//-------------------------------------------------------------------------------------------------

// while(true){
//     let grade1 = scanner(`Escreva a nota 1 do aluno: `)
//     let grade2 = scanner(`Escreva a nota 2 do aluno: `)

//     let media = ((grade1+grade2)/2)

//     if (media < 6){
//         console.log(`Aprovado!`);
//         break
//     }
//     else{
//         console.log(`Reprovado`);  
//          break
//     }
// }

// -----------------------------------------------------------------------------------------------

// let n1 = scanner(`Digite um numero: `)

// if((n1%2) == 0){
//     console.log(`${n1} é par, e seus vizinhos são ${n1+1} e ${n1-1}`);
// }
// else{
//     console.log(`${n1} é impar, e seus vizinhos são ${n1+1} e ${n1-1}`);
// }

// -----------------------------------------------------------------------------------------------

// while(true){
//     let cTemp = scanner(`Digite sua temperatura em Celsius: `)
//     let fTemp = ((cTemp*9/5)+32);

//     if(cTemp < 0 ){
//         console.log(`Temperatura abaixo de 0`);
//     }
//     else{
//         console.log(`Sua temperatura em Fº é ${fTemp}`);
//         break
//     }

// }

// --------------------------------------------------------------------------------------------------
// let price = scanner(`Escreva o preço original`)
// let discount = scanner(`Escreva o desconto(em %)`)

// if (discount > 50%){
//     console.log(`Desconto muito alto, confira a promoçao!`);
    
// }

//----------------------------------------------------------------------------------------------------

// let price = scanner(`Escreva o valor do produto: `)
// let isInstallments = scanner(`Quer parcelar ou nao? (Y/N) `).toLowerCase().charAt(0)

// if (isInstallments == `y`){
//     price = (price+(price/10))
//     console.log(`Parcelado produto fica 3X R$${price/3}`);
// }
// else{
//     console.log(`A vista produto fica R$${price}`);
// }

// ------------------------------------------------------------------------------------------------------

// let base = scanner(`Escreva a base do triangulo: `)
// let height = scanner(`Escreva a altura do triangulo: `)
// let area = ((base*height)/2)

// if(height <= 0 || base <= 0){
//     console.log(`Entrada invalida!`);
// }
// else{
//     console.log(`A area do seu triangulo é ${area}`);
// }

// ------------------------------------------------------------------------------------------------------

// let value = scanner(`Quanto deu a conta? `)
// let people = scanner(`Quantas pessoas tem? `)
// let peopleValue = (value/people)

// if (people<2){
//     console.log(`Numero invalido de pessoas`);
// }
// else{
//     console.log(`Deu R$${peopleValue} pra cada uma das ${people} pessoas`);
// }

// --------------------------------------------------------------------------------------------------------

// while(true){
//     let grade1 = scanner(`Escreva a nota 1 do aluno: `)
//     let grade2 = scanner(`Escreva a nota 2 do aluno: `)
//     let grade3 = scanner(`Escreva a nota 3 do aluno: `)

//     let media = ((grade1+grade2+grade3)/3)

//     if (media > 8 && grade1 >=6 && grade2 >=6 && grade3 >=6){
//         console.log(`Aprovado! Excelente`);
//         break
//     }
    
// }

// ---------------------------------------------------------------------------------------------------------

// let name = scanner(`Qual o seu nome: `)
// let item1 = scanner(`Quantas porcas voce quer? `)
// let item2 = scanner(`Quantas parafusos voce quer? `)
// let item3 = scanner(`Quantas arruelas voce quer? `)

// if (item1 <= 0 || item2 <= 0 || item3 <= 0){
//     console.log(`Quantidade invalida`);
// }
// else if (item2 < (item1+item3)){
//     console.log(`Verifique se a quantidade de parafusos é suficiente`);
// }
