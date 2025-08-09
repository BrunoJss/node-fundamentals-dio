const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
}
const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }
    return result
}

async function logRollResult(playerName, block, diceResult, playerAttribute) {
    console.log(`${playerName} 🎲 rolou um dado de ${block} ${diceResult} + ${playerAttribute} = ${diceResult + playerAttribute}`)
}

async function declareWinner(p1, p2) {
    console.log("Resultado final:")
    console.log(`${p1.NOME}: ${p1.PONTOS} ponto(s)`)
    console.log(`${p2.NOME}: ${p2.PONTOS} ponto(s)`)

    if(p1.PONTOS > p2.PONTOS){
        console.log(`${p1.NOME} venceu a corrida! Parabéns 🏆️🏎️`)
    } else if(p2.PONTOS > p1.PONTOS){
        console.log(`${p2.NOME} venceu a corrida! Parabéns 🏆️🏎️`)
    } else{
        console.log(`A corrida terminou em empate`)
    }
}

async function playRaceEngine(p1, p2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`)

        // Sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)



        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block == "RETA") {
            totalTestSkill1 = diceResult1 + p1.VELOCIDADE
            totalTestSkill2 = diceResult2 + p2.VELOCIDADE

            logRollResult(p1.NOME, "velocidade", diceResult1, p1.VELOCIDADE);
            logRollResult(p2.NOME, "velocidade", diceResult2, p2.VELOCIDADE);

        }

        if (block == "CURVA") {
            totalTestSkill1 = diceResult1 + p1.MANOBRABILIDADE
            totalTestSkill2 = diceResult2 + p2.MANOBRABILIDADE

            logRollResult(p1.NOME, "manobrabilidade", diceResult1, p1.MANOBRABILIDADE);
            logRollResult(p2.NOME, "manobrabilidade", diceResult2, p2.MANOBRABILIDADE);
        }

        if (block == "CONFRONTO") {
            let powerResult1 = diceResult1 + p1.PODER
            let powerResult2 = diceResult2 + p2.PODER

            console.log(`${p1.NOME} confrontou ${p2.NOME} 🤼`)
            await logRollResult(p1.NOME, "poder", diceResult1, p1.PODER)
            await logRollResult(p2.NOME, "poder", diceResult2, p2.PODER)

            if(powerResult2 > powerResult1 && p1.PONTOS > 0){
                p1.PONTOS--;
                console.log(`${p2.NOME} venceu o confronto! ${p1.NOME} perdeu um ponto 🐢`)
            }
            if(powerResult1 > powerResult2 && p2.PONTOS > 0){
                p2.PONTOS--;
                console.log(`${p1.NOME} venceu o confronto! ${p2.NOME} perdeu um ponto 🐢`)
            }

            console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum ponto foi perdido." : "")
        }

        // verificando o vencedor
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${p1.NOME} marcou um ponto! ⭐️`)
            p1.PONTOS++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${p2.NOME} marcou um ponto! ⭐️`)
            p2.PONTOS++;
        }

        console.log("____________________________")
    }
}

(async function main() {
    console.log(
        `🚦🏁 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
    );
    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})() 