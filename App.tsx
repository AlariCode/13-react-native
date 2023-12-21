import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { Input } from './shared/Input/Input';

export default function App() {
	const width = Dimensions.get('window').width;
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
					<Input placeholder='Пароль' />
					<Button title='Войти' />
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
		backgroundColor: '#16171D'
	},
	content: {
		alignItems: 'center',
		gap: 50
	},
	form: {
		alignSelf: 'stretch',
		gap: 16
	},
	input: {
		backgroundColor: '#2E2D3D'
	},
	logo: {
		width: 220
	}
});
