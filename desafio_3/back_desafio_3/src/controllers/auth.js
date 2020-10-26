const jwt = require('jsonwebtoken');
const response = require('./response');
const Autores = require('../repositories/autores');
const Password = require('../utils/password');

require('dotenv').config();

const autenticar = async (ctx) => {
	const { email = null, password = null } = ctx.request.body;
	if (!email || !password) {
		return response(ctx, 400, { mensagem: 'Erro' });
	}

	const autor = await Autores.obterAutorPorEmail(email);

	if (autor) {
		const comparison = await Password.check(password, autor.senha);
		if (comparison) {
			const token = await jwt.sign(
				{ id: autor.id, email: autor.email },
				process.env.JWT_SECRET || 'cubosacademy',
				{
					expiresIn: '1h',
				}
			);
			return response(ctx, 200, { token });
		}
	}

	return response(ctx, 200, { mensagem: 'Email e/ou senha incorretos' });
};

module.exports = { autenticar };