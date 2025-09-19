/* 
=========================================
Objetivo desta aula:
=========================================
Entender o que é uma Promise
Ver como usar .then e .catch
Ver como refatorar usando async/ await 
Entender como tratar erros com try/catch
Simular operacões demorada (como se fossem requisições)
Fazer exercicios Prático 
*/

//const pedirUber = new Promise((resolve, reject) => {
// //console.log('Chamando um Uber ...')

//const motoristaAceitou = true;

//setTimeout(() => {
//     if (motoristaAceitou) {
//          resolve("O motorista aceitou! O carro está a caminho ");
//       } else {
//           reject("Nenhum motorista disponível");
//        }
//    }, 3000); //3 segundos
//});
//promise
//pedirUber.then((msg) =>console.log("Then:", msg)).
//catch((erro)=>console.log("Catch",erro)).
//finally(()=> console.log("Fim do processo"))
 
function pedirPizza(sabor){
    return new Promise((resolve,reject)=>{
        console.log(`Voce pediu ${sabor}...`)
        setTimeout(()=>{
            if(sabor === "Calabresa"){
                resolve("Sua pizza de calabresa esta pronta")
            }else{
                reject("Infelizmente só temos pizza de calabresa")
            }
        },3000)
    })
}

pedirPizza("Calabresa").then((msg) =>console.log("Then:", msg)).
catch((msg) =>console.log("Catch:", msg))