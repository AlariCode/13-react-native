import { useAtom } from 'jotai';
import { View, Text } from 'react-native';
import { loginAtom } from '../../entities/auth/model/auth.state';
import { useEffect } from 'react';

export default function MyCourses() {
	const [auth, login] = useAtom(loginAtom);

	useEffect(() => {
		login({ email: 'vasia@pupkin.ru', password: '12345678' });
	}, []);

	return (
		<View>
			<Text>{auth?.access_token}</Text>
		</View>
	);
}
