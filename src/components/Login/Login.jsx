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
		// Response contains value result, it's user's token. You should save it to the localStorage
		navigate('/courses');
	}

	return (
		<div className='Login'>
			<p>Login</p>
			<form onSubmit={onSubmitCreds}>
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