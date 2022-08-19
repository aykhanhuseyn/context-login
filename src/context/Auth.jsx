import axios from 'axios';
import React, { createContext, useState } from 'react';

// export const Auth = createContext(default value);
// default value will be overriten by Provider value
export const Auth = createContext({});

// aapi call
// axios.get('/userApi.json').then(({ data }) => {})
async function apiLogin({ username, password }) {
	try {
		const { data } = await axios.get('/userApi.json');

		if (data.username === username && data.password === password) {
			return {
				username: data.username,
				token: `${Math.floor(Math.random() * 1000000).toString(36)}.${Math.floor(
					Math.random() * 1000000
				).toString(36)}.${Math.floor(Math.random() * 1000000).toString(26)}`,
			};
		}
		throw new Error('Username or password is incorrect.');
	} catch (error) {
		throw new Error('Username or password is incorrect.');
	}
}

export const AuthContextProvider = ({ children }) => {
	const [username, setUsername] = useState('John');
	const [token, setToken] = useState(
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
	);

	const logIn = async ({ username, password, remember }) => {
		try {
			const data = await apiLogin({ username, password });
			console.log({ data });

			setUsername(data.username);
			setToken(data.token);
		} catch (error) {
			throw new Error(error);
		}
	};

	const logOut = () => {
		setUsername(null);
		setToken(null);
	};

	return (
		<Auth.Provider value={{ username, token, logIn, logOut }}>
			{children}
		</Auth.Provider>
	);
};
