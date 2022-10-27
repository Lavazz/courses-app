import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Input from '../../common/Input/Input';
import './Login.css';

function Login({ setIsAuth }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	async function onSubmitCreds(e) {
		e.preventDefault();
		const credentials = { email, password };

		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(credentials),
		});

		const result = await response.json();

		localStorage.setItem('token', result.result);
		setIsAuth(true);
		navigate('/courses');
	}

	return (
		<div className='Login'>
			<p>Login</p>
			<form onSubmit={onSubmitCreds}>
				<Input
					placeholderText='Enter email'
					value={email}
					handleChange={(event) => {
						setEmail(event.target.value);
					}}
					type='email'
					lableText='Email'
				></Input>
				<Input
					placeholderText='Enter password'
					value={password}
					handleChange={(event) => {
						setPassword(event.target.value);
					}}
					type='password'
					lableText='Password'
				></Input>
				<input type='submit' value='Login' className='button' />
			</form>
			If you don't have an account you can{' '}
			<Link to='/registration'>Registration</Link>
		</div>
	);
}

export default Login;
