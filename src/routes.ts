import { Request, Response} from 'express';
import createUser from './services/CreateUsers'

export function HelloWorld(resquest: Request, response: Response) {
	const user = createUser({
		email: 'viictoroliver@gmail.com',
		password: '1223456',
		techs: [
			"NodeJS",
			"ReactJS",
			{ title: "javascript", expecience: 100 }
		]
	});

	return response.json({ message: "Hello World" });
};