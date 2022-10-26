import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	async function onSubmitCreds(e) {
		e.preventDefault();
		const credentials = {
			email: email,
			password: password,
		};

		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(credentials),
		});

		const result = await response.json();
		localStorage.setItem(email, result.result);

		navigate('/courses');
	}

	return (
		<div className='Login'>
			<p>Login</p>
			<form
				onSubmit={(e) => {
					onSubmitCreds(e);
				}}
			>
				<label>
					Email
					<input
						placeholder='Enter email'
						value={email}
						onChange={(event) => {
							setEmail(event.target.value);
						}}
					/>
				</label>
				<label>
					Password
					<input
						placeholder='Enter password'
						value={password}
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					/>
				</label>
				<input type='submit' value='Login' className='button' />
			</form>
			If you don't have an account you can{' '}
			<Link to='/registration'>Registration</Link>
		</div>
	);
}

export default Login;
