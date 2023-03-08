import { createCookieSessionStorage, redirect } from '@remix-run/node';

type LoginForm = {
	username: string;
	password: string;
};

export async function login({ username, password }: LoginForm) {
	const user = '';
	return user;
}

function getUserSession(request: Request) {
	return storage.getSession(request.headers.get('Cookie'));
}

const sessionSecret = process.env.VITE_SESSION_SECRET;
if (!sessionSecret) {
	throw new Error('SESSION_SECRET must be set');
}

const storage = createCookieSessionStorage({
	cookie: {
		name: 'b2bShopping',
		// normally you want this to be `secure: true`
		// but that doesn't work on localhost for Safari
		// https://web.dev/when-to-use-local-https/
		secure: process.env.NODE_ENV === 'production',
		secrets: [sessionSecret],
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60 * 24 * 30,
		httpOnly: true,
	},
});

export async function createUserSession() {}

export async function logout(request: Request) {
	const session = await getUserSession(request);
	return redirect('/login', {
		headers: {
			'Set-Cookie': await storage.destroySession(session),
		},
	});
}
