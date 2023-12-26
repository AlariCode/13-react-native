import { Animated, Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export function Button({ text, ...props }: PressableProps & { text: string }) {
	const animatedValue = new Animated.ValueXY({
		x: 0,
		y: 0
	});

	Animated.timing(animatedValue, {
		toValue: {
			x: 100,
			y: 100
		},
		duration: 2000,
		useNativeDriver: false
	}).start();

	return (
		<Pressable {...props}>
			<Animated.View style={{
				...styles.button, width: animatedValue.x, height: animatedValue.y
			}}>
				<Text style={styles.text}>{text}</Text>
			</Animated.View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 58,
		backgroundColor: Colors.primary,
		borderRadius: Radius.r10,
	},
	text: {
		color: Colors.white,
		fontSize: Fonts.f18
	}
})