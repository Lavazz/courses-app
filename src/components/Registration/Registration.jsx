import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Registration.css';

function Registration() {
	const [nameValue, setNameValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const navigate = useNavigate();

	async function registerUser(e) {
		e.preventDefault();
		const newUser = {
			name: nameValue,
			email: emailValue,
			password: passwordValue,
		};
		console.log('newUser' + newUser);
		const response = await fetch(`http://localhost:4000/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		});

		// const result = await response.json();

		navigate('/login');
	}

	return (
		<div className='Registration'>
			<p>Registration</p>
			<form onSubmit={registerUser}>
				<div className='input'>
					<label>
						<div>Name</div>
						<input
							type='text'
							value={nameValue}
							onChange={(event) => {
								setNameValue(event.target.value);
							}}
							placeholder='Enter name'
						/>
					</label>
				</div>
				<div className='input'>
					<label>
						<div>Email</div>
						<input
							type='email'
							value={emailValue}
							onChange={(event) => {
								setEmailValue(event.target.value);
							}}
							placeholder='Enter email'
						/>
					</label>
				</div>
				<div className='input'>
					<label>
						<div>Password</div>
						<input
							type='password'
							value={passwordValue}
							onChange={(event) => {
								setPasswordValue(event.target.value);
							}}
							placeholder='Enter password'
						/>
					</label>
				</div>
				<input type='submit' value='Registration' className='button' />
				<p>
					If you have an account you can <Link to='/login'>Login</Link>
				</p>
			</form>
		</div>
	);
}

export default Registration;
