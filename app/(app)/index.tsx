import { useSetAtom } from 'jotai';
import { View, Text } from 'react-native';
import { logoutAtom } from '../../entities/auth/model/auth.state';
import { useEffect } from 'react';

export default function MyCourses() {
	// const [auth, login] = useAtom(loginAtom);
	const logout = useSetAtom(logoutAtom);

	useEffect(() => {
		logout();
	}, []);

	return (
		<View>
			<Text>index</Text>
		</View>
	);
}
