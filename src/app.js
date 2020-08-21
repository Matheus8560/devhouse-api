import express from 'express';
import mongose from 'mongoose';
import cors from 'cors';
import path from 'path';
import routes from './routes';

class App {
	constructor() {
		this.server = express();

		mongose.connect('Sua string de conexão do MongoDB', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(cors());

		this.server.use(
			'/files',
			express.static(path.resolve(__dirname, '..', 'uploads'))
		);

		this.server.use(express.json());
	}

	routes() {
		this.server.use(routes);
	}
}

export default new App().server;
