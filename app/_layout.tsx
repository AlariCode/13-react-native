import { Stack } from 'expo-router';
import { Colors } from '../shared/tokens';

export default function RootRayout() {
	return (
		<Stack
			screenOptions={{
				statusBarColor: Colors.black,
				contentStyle: {
					backgroundColor: Colors.black,
				},
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen
				name="restore"
				options={{
					presentation: 'modal',
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
