import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import './Login.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from '../../store/user/thunk';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	async function onSubmitCreds(e) {
		e.preventDefault();
		const credentials = { email, password };
		dispatch(loginUserThunk(credentials));
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
				<Button>Login</Button>
			</form>
			If you don't have an account you can{' '}
			<Link to='/registration'>Registration</Link>
		</div>
	);
}

Login.propTypes = {
	setIsAuth: PropTypes.func,
	setAuthUser: PropTypes.func,
};

export default Login;
