import { useSelector } from 'react-redux';
import { selectUser } from '../store/user/selectors';

export const useAuth = () => {
	const user = useSelector(selectUser);
	const isAdmin = user.role === 'admin';
	const isAuth = user.isAuth;

	return {
		user,
		isAuth,
		isAdmin,
	};
};
