import { useEffect, useState } from 'react';
import { ErrorNotificationProps } from './ErrorNotification.props';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../tokens';

export function ErrorNotification({ error }: ErrorNotificationProps) {
	const [isShown, setIsShown] = useState<boolean>(false);

	useEffect(() => {
		if (!error) {
			return;
		}
		setIsShown(true);
		const timerId = setTimeout(() => {
			setIsShown(false);
		}, 3000);
		return () => {
			clearTimeout(timerId);
		}
	}, [error]);

	if (!isShown) {
		return <></>;
	}

	return (
		<View style={styles.error}>
			<Text style={styles.errorText}>{error}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		width: Dimensions.get('screen').width,
		backgroundColor: Colors.red,
		padding: 15,
		top: 50
	},
	errorText: {
		fontSize: Fonts.f16,
		color: Colors.white,
		textAlign: 'center'
	}
})