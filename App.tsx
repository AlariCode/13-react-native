import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text style={styles.textStyle}>Моё первое приложение</Text>
				<Button title="Я кнопка" />
			</View>
			<View style={{
				backgroundColor: 'yellow',
				alignItems: 'flex-end',
				height: 500,
				flexDirection: 'row'
			}}>
				<View style={{ backgroundColor: 'tomato', flexGrow: 1, height: 100 }}><Text>1</Text></View>
				<View style={{ backgroundColor: 'purple', flexGrow: 1, height: 100 }}><Text>2</Text></View>
				<View style={{ backgroundColor: 'green', flexGrow: 1, height: 100 }}><Text>3</Text></View>
			</View>
		</View >
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 70
	},
	top: {
		flexDirection: 'row'
	},
	textStyle: { color: 'blue', fontSize: 24, borderWidth: 1, borderColor: 'blue' }
});
