import { Animated, Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export function Button({ text, ...props }: PressableProps & { text: string }) {
	const animatedValue = new Animated.ValueXY({
		x: 0,
		y: 0
	});
	Animated.spring(animatedValue, {
		toValue: {
			x: 100,
			y: 100
		},
		useNativeDriver: true
	}).start();
	return (
		<Pressable {...props}>
			<Animated.View style={{
				...styles.button, transform: [
					{ translateX: animatedValue.x },
					{ translateY: animatedValue.y }
				]
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