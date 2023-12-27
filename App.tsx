import { Dimensions, StyleSheet, Text, View, Image, Alert, ToastAndroid, Platform } from 'react-native';
import { Input } from './shared/Input/Input';
import { Colors, Gaps } from './shared/tokens';
import { Button } from './shared/Button/Button';

export default function App() {
	const width = Dimensions.get('window').width;

	const alert = () => {
		// Alert
		// Alert.alert('Ошибка', 'Неверный логин или пароль', [{
		// 	text: 'Хорошо',
		// 	onPress: () => {},
		// 	style: 'cancel'
		// }]);
		if (Platform.OS === 'android') {
			ToastAndroid.showWithGravity(
				'Неверный логин или пароль',
				ToastAndroid.LONG,
				ToastAndroid.CENTER,
			);
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image
					style={styles.logo}
					source={require('./assets/logo.png')}
					resizeMode='contain'
				/>
				<View style={styles.form}>
					<Input placeholder='Email' />
					<Input isPassword placeholder='Пароль' />
					<Button text='Войти' onPress={alert} />
				</View>
				<Text>Восстановить пароль</Text>
			</View>
		</View >
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
		padding: 55,
		backgroundColor: Colors.black
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50
	},
	form: {
		alignSelf: 'stretch',
		gap: Gaps.g16
	},
	logo: {
		width: 220
	}
});
