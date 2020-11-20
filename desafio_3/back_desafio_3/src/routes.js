// Contém a estrutura das rotas.

const Router = require("koa-router");

const router = new Router();
const jogos = require("./controllers/jogos"); //esse é o caminho

router.get("/jogos/:rodada", jogos.obterJogosDeRodada);
router.post("/jogos", jogos.editarPlacar); //.put em vez de post aqui
router.get("/classificacao", jogos.obterClassificacao);
router.post("auth", jogos.autenticar);


module.exports = router;
