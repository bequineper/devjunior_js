// let bernardo = {
//     temPassagem: true,
//     temDinheiro: false,
//     temCompanhia: true,
// }

// if (bernardo.temPassagem && (bernardo.temDinheiro || bernardo.temCompanhia)) {
//     console.log(`Bernardo pode viajar!`)
// }
// else{
//     console.log(`Bernardo N`)
// }

//----------------------------------------------- Desafio 3

let temperatura = 25

switch (true) {

case (temperatura >= 35): 
    console.log(`O Dia Está Muito Quente`);
    break;
    
case (temperatura >= 26): 
    console.log(`O dia está meio quente`);
    break;

   

case (temperatura >= 18):
    console.log(`O dia está perfeito`);
    break;

case (temperatura >= 10):
    console.log(`O dia está frio`);
    break; 


default:
    console.log(`O dia está muito frio`);
    break;
    
}



