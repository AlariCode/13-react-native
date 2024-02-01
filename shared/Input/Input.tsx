import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';
import { useState } from 'react';
import EyeOpenedIcon from '../../assets/icons/eye-opened';
import EyeClosedIcon from '../../assets/icons/eye-closed';

export function Input({ isPassword, style, ...props }: TextInputProps & { isPassword?: boolean }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	return (
		<View style={style}>
			<TextInput
				style={styles.input}
				secureTextEntry={isPassword && !isPasswordVisible}
				placeholderTextColor={Colors.gray}
				{...props}
			/>
			{isPassword && (
				<Pressable onPress={() => setIsPasswordVisible((state) => !state)} style={styles.eyeIcon}>
					{isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 58,
		backgroundColor: Colors.violetDark,
		paddingHorizontal: 24,
		borderRadius: Radius.r10,
		fontSize: 16,
		color: Colors.gray,
		fontFamily: Fonts.regular,
	},
	eyeIcon: {
		position: 'absolute',
		right: 0,
		paddingHorizontal: 20,
		paddingVertical: 18,
	},
});
