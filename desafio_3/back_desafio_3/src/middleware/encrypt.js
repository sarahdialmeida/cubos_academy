//verificar se a pessoa usuaria esta autenticada
//token: devolver pro front 
//permite q a pessoa edite
//ver aula 22 de front fetch

const Password = require('../utils/password');
const response = require('../controllers/response');

const encrypt = async (ctx, next) => {
	const { senha = null } = ctx.request.body;

	if (!senha) {
		return response(ctx, 400, { mensagem: 'Pedido mal formatado.' });
	}

	const hash = await Password.encrypt(senha);

	ctx.state.hash = hash;

	return next();
};

module.exports = { encrypt };