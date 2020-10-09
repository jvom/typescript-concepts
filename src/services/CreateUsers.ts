interface TechObjects {
	title: string,
	expecience: number
}

interface CreateUserData {
	name?: string,
	email: string,
	password: string,
	techs: Array<string | TechObjects>
}

export default function createuser({name, email, password}: CreateUserData) {
		const user = {
			name,
			email,
			password
		};

		return user;
}