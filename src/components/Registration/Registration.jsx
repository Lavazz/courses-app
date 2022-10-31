import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { registerPost } from '../../services';

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
		registerPost(newUser);
		navigate('/login');
	}

	return (
		<div className='Registration'>
			<p>Registration</p>
			<form onSubmit={registerUser}>
				<div className='input'>
					<Input
						placeholderText='Enter name'
						value={nameValue}
						handleChange={(event) => {
							setNameValue(event.target.value);
						}}
						type='emtextail'
						lableText='Name'
					></Input>
				</div>
				<div className='input'>
					<Input
						placeholderText='Enter email'
						value={emailValue}
						handleChange={(event) => {
							setEmailValue(event.target.value);
						}}
						type='email'
						lableText='Email'
					></Input>
				</div>
				<div className='input'>
					<Input
						placeholderText='Enter password'
						value={passwordValue}
						handleChange={(event) => {
							setPasswordValue(event.target.value);
						}}
						type='password'
						lableText='Password'
					></Input>
				</div>
				<Button buttonText='Registration' />
				<p>
					If you have an account you can <Link to='/login'>Login</Link>
				</p>
			</form>
		</div>
	);
}

export default Registration;
