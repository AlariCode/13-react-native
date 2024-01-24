import { Redirect } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';
import { Colors, Fonts } from '../../shared/tokens';
import { MenuButton } from '../../features/layout/ui/MenuButton/MenuButton';

export default function AppRayout() {
	const { access_token } = useAtomValue(authAtom);
	if (!access_token) {
		return <Redirect href="/login" />;
	}

	return (
		<Drawer
			screenOptions={({ navigation }) => ({
				headerStyle: {
					backgroundColor: Colors.blackLight,
					shadowColor: Colors.blackLight,
					shadowOpacity: 0,
				},
				headerLeft: () => {
					return <MenuButton navigation={navigation} />;
				},
				headerTitleStyle: {
					color: Colors.white,
					fontFamily: 'FiraSans',
					fontSize: Fonts.f20,
				},
				headerTitleAlign: 'center',
				sceneContainerStyle: {
					backgroundColor: Colors.black,
				},
			})}
		>
			<Drawer.Screen
				name="index"
				options={{
					title: 'Мои курсы',
				}}
			/>
		</Drawer>
	);
}
