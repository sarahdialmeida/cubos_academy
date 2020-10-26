// /inicio servidor we. Nesse exemplo ele contém a estrutura do servidor.

const Koa = require("koa");
const bodyparser = require("koa-bodyparser"); 
const router = require("./src/routes");
const Cors = require('@koa/cors');

const server = new Koa();
const PORT = process.env.PORT || 8081;

server.use(bodyparser());
server.use(router.routes());

server.listen(PORT, () => console.log ("rodando na porta", PORT));