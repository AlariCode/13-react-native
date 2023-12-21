import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const width = Dimensions.get('window').width;
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text>PurpleSchool</Text>
				<View style={styles.form}>
					<TextInput style={styles.input} />
					<TextInput style={styles.input} />
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
		padding: 55
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
	}
});
