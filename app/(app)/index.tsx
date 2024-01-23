import { View, Text } from 'react-native';
import { Button } from '../../shared/Button/Button';
import { useSetAtom } from 'jotai';
import { logoutAtom } from '../../entities/auth/model/auth.state';

export default function MyCourses() {
	const logout = useSetAtom(logoutAtom);
	return (
		<View>
			<Text>index</Text>
			<Button text="Выход" onPress={logout} />
		</View>
	);
}
