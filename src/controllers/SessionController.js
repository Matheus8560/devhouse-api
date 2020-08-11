// metodos constroller: index, show, update, store, destroy
/*
index: Listagem de sessões
store: Criar uma sessão
show: Quando queremos listar uma unica sessão
update: Quando queremos alterar sessao
destroy: Quando queremos deletar sessao
*/

import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
	async store(req, res) {
		const schema = Yup.object().shape({
			email: Yup.string().email().required(),
		});

		const { email } = req.body;

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'falha da validação' });
		}

		// verificabdo se esse usuario já existe
		let user = await User.findOne({ email });

		if (!user) {
			user = await User.create({ email });
		}

		return res.json(user);
	}
}

export default new SessionController();
