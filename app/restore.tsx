import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Restore() {
	return (
		<View>
			<Link href={'/'}>
				<Text>Restore</Text>
			</Link>
		</View>
	);
}
