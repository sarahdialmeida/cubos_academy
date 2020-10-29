//lidar com banco de dados
//fazer correçoes aqui - calcular classif. 
//Para o calculo do número de pontos a regra é a seguinte:
//Para cada jogo vencido, o time vencedor ganha 3 pontos.
//Para cada jogo empatado, cada time ganha 1 ponto.
//Para cada jogo perdido, o time perdedor não ganha nenhum ponto.



const db = require ("../utils/database");

const obterJogosRodada = async (rodada) => {
    const query = "SELECT * FROM jogos WHERE rodada = $1";
    const result = await db.query ({ 
        text: query, 
        values: [rodada],
    });

    return result.rows;
};

const editarPlacar = async (placarCasa) => {
    const query = "UPDATE jogos set WHERE placar = $1";
    const result = await db.query ({ 
        text: query, 
        values: [placarCasa],
    });

    return result.rows;
};

const obterClassificacao = async (rodada) => {
    const query = "SELECT * FROM jogos WHERE rodada = $1";
    const result = await db.query ({ 
        text: query, 
        values: [rodada],
    });

    return result.rows;
};

const autenticar = async (rodada) => {
    const query = "SELECT * FROM jogos WHERE rodada = $1";
    const result = await db.query ({ 
        text: query, 
        values: [rodada],
    });

    return result.rows;
};

module.exports = {obterJogosRodada, 
                editarPlacar, 
                obterClassificacao, 
                autenticar};
