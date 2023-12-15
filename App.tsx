import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View>
				<Text>Привет!</Text>
			</View>
			<Text style={styles.textStyle}>Моё первое приложение</Text>
			<StatusBar style="auto" />
			<TextInput value='привет!' />
			<Button title="Я кнопка" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textStyle: { color: 'blue', fontSize: 24, borderWidth: 1, borderColor: 'blue' }
});
