import { Image, StyleSheet } from 'react-native';

export function Avatar({ image }: { image: string | null }) {
	return (
		<>
			{image ? (
				<Image
					style={styles.image}
					source={{
						uri: image,
					}}
				/>
			) : (
				<Image source={require('../../../../assets/images/avatar.png')} />
			)}
		</>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
});
