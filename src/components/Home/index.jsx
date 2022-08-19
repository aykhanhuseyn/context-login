import React, { useContext } from 'react';
import { Auth } from '../../context/Auth';

export const Home = () => {
	const context = useContext(Auth);
	return <div>Home</div>;
};
