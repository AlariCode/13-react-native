import { View, Pressable, StyleSheet } from 'react-native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import CloseIcon from '../../../../assets/icons/close';

export function CloseDrawer(navigation: DrawerNavigationHelpers) {
	return (
		<Pressable onPress={() => navigation.closeDrawer()}>
			<View style={styles.button}>
				<CloseIcon />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 20,
		right: 20,
	},
});
