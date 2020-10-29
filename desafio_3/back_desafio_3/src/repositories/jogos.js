//lidar com banco de dados

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
