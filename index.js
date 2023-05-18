var readline = require('readline-sync');
let i = 0;
var nome1 = "";

while(i <= 50) {
console.log("+____Menu de Passagens Aéreas_____+");
console.log("|                                 |");
console.log("|      1. Comprar passagem        |");
console.log("|      2. Consultar Voos          |");
console.log("|      3. Mapa de Assentos        |");
console.log("|      4. Emitir Ticket           |");
console.log("|      0. Sair                    |");
console.log("+_________________________________+");

var resposta1 = readline.question("Digite o numero que deseja: ");
console.log(resposta1);



switch(resposta1) {
    case "1":
        console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +");
        console.log("Você está em -> Comprar Passagem");
        var nome1 = readline.question('Digite seu nome:');
        var sobrenome2 = readline.question('Digite seu sobrenome:');
        var idade3 = readline.question('Digite sua idade:');
        var idade0 = parseInt(idade3);
        var assento4 = readline.question('Escolha seu assento:');
        var cidade5 = readline.question('Digite sua cidade:');
        var destino6 = readline.question('Digite seu destino:');
        console.log("*Resumo da compra*");
        console.log("Cliente:" + nome1 +" "+ sobrenome2);
        console.log("Idade:" + idade0);
        console.log("Assento:" + assento4);
        console.log("Voo:" +cidade5 +" X "+ destino6);
        console.log("Status do voo: confirmado");
        console.log("Valor: R$ 3.500,00");
        break;
    case "2":
        console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +");
        console.log("Você está em -> Consulta de Voos");
        console.log("                                  ");
        console.log("Origem          x          Destino");
        console.log("__________________________________");
        console.log("                                  ");
        console.log("Presidente Prudente        Dublin");
        console.log("Presidente Prudente        Ceará");
        console.log("Presidente Prudente        São Paulo");
        console.log("Presidente Prudente        New York");
        break
    case "3":
        console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +");
        console.log("Você está em -> Mapa de Assentos");
        var fileiraA = "";
        var fileiraB = "";
        for (let dudu = 1; dudu < 13; dudu++) {
            if(assento4 == "A"+dudu){
                fileiraA += " X "
                fileiraB += "B"+dudu+" "
            }
            else if(assento4 == "B"+dudu){
                fileiraA += " X "
                fileiraB += "A"+dudu+" "
            }
            else{
                fileiraA+=  "A"+dudu+" "
                fileiraB+= "B"+dudu+" "
            }
        }
        console.log(fileiraA)
        console.log(fileiraB)
        break;

    case "4":
        if(nome1.length > 0) {
        console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +");
        console.log("Você está em -> Emitir Ticket");
        console.log("                              ");
        console.log("*************************************************");
        console.log("*          OBRIGADO POR VIAJAR CONOSCO          *");
        console.log("*                                               *");
        console.log("*" + "Cliente:" + nome1 +" "+sobrenome2     +  "*");
        console.log("*" + "Idade:" + idade0 +" "+assento4         + "*");
        console.log("*" + "Origem/Destino:" +cidade5 +" "+destino6 +"*");
        console.log("*" + "Status do Voo:" + "confirmado"  +        "*");
        } else {
            console.log("Você ainda não possui um ticket!");
        }
        break;
    case "0":
        i = 51;
        break;
    default:
        console.log('Comando inválido.');
}
 }