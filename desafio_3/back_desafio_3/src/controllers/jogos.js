//Contém a parte da lógica das funcionalidades do servidor. Nesse exemplo, possui dois arquivos: response.js que trata as respostas, jogos.js que mantém as funcionalidades de cada rota e auth.js que lida com as auteticacoes.

const response = require ("./response");
const partido = require ("../repositories/jogos");

const obterJogosDeRodada = async (ctx) => {
    const {rodada = null } = ctx.params;
    if (rodada) {
        const result = await partido.obterJogosRodada(rodada);
        if (result) {
            return response (ctx, 200, result);
        }
    }
    return response (ctx, 400, {mensagem: "Error"});
};

const editarPlacar = async (ctx) => {
    const {rodada = null } = ctx.params;
    if (rodada) {
        const result = await partido(rodada);
        if (result) {
            return response (ctx, 200, result);
        }
    }
    return response (ctx, 400, {mensagem: "Error"});
};

/* 
pegar a lista de todos os times distintos: criar funcao no repositories. exportar e chamar a funcao aqui no controlador. 
pegar todos os jogos
para cada jogo quem sao os times perdedores e ganhadores e qual o placar
encrementar a lista de todos os times distintos e add a qtdade de gols q ele fez e a pontuaçao dele se ele ganhou ou nao
e desempate: aplicar o algoritmo a partir do saldo de gols 
fazer console.log aqui no controllers
*/

const obterClassificacao = async (ctx) => {
    const {rodada = null } = ctx.params;
    if (rodada) {
        const result = await partido(rodada);
        if (result) {
            return response (ctx, 200, result);
        }
    }
    return response (ctx, 400, {mensagem: "Error"});
};

const autenticar = async (ctx) => {
    const {rodada = null } = ctx.params;
    if (rodada) {
        const result = await partido(rodada);
        if (result) {
            return response (ctx, 200, result);
        }
    }
    return response (ctx, 400, {mensagem: "Error"});
};


module.exports = {obterJogosDeRodada, editarPlacar, obterClassificacao, autenticar};
