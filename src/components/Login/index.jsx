import React, { useContext, useState, useCallback } from 'react';
import { StyledInput, InputPassword, Button } from '../shared';
import { Auth } from '../../context/Auth';

export const Login = () => {
	const { logIn } = useContext(Auth);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState(false);

	const handleReset = useCallback(() => {
		setUsername('');
		setPassword('');
		setRemember(false);
	}, []);

	const handleSubmit = useCallback(
		async (event) => {
			event.preventDefault();

			try {
				logIn({ username, password, remember });

				handleReset();
			} catch (error) {
				setError(error);
			}
		},
		[username, password, remember, logIn, handleReset]
	);

	return (
		<form onSubmit={handleSubmit}>
			{error && <h2 style={{ color: 'red' }}>{error?.message}</h2>}
			<StyledInput
				name='username'
				type='text'
				value={username}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
			<InputPassword
				name='password'
				type={showPassword ? 'text' : 'password'}
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				suffix='hello'
				onSuffixClick={() => {
					setShowPassword((prevState) => !prevState);
				}}
			/>
			<input
				name='remember'
				type='checkbox'
				checked={remember}
				onChange={(e) => {
					setRemember(e.target.checked);
				}}
			/>
			<Button type='submit'>log me in</Button>
		</form>
	);
};
