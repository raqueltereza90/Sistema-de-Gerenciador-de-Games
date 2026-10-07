const prompt = require('prompt-sync')();

let nome = prompt("Nome do Jogador: ");
let pontuacao = Number(prompt("Pontuação do Jogador: "));
let pontuacaoMinima = 1000;

console.log(" Analisando Perfil.....")

if(pontuacao >= pontuacaoMinima){
    console.log("APROVADO!!!" + nome + "Tem nível para a equipe Principal");
}else {
    let pontosFaltantes = pontuacaoMinima - pontuacao;
    console.log("REPROVADO!!! faltam " + pontosFaltantes + " pontos para o jogador " + nome + " entrar na equipe principal");
}

