import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { ReactNode, useState } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface MenuItemProps {
	navigation: DrawerNavigationHelpers;
	icon: ReactNode;
	text: string;
	path: string;
}

export function MenuItem({
	navigation,
	icon,
	text,
	path,
	...props
}: MenuItemProps & PressableProps) {
	const [clicked, setClicked] = useState<boolean>(false);

	return (
		<Pressable
			{...props}
			onPress={() => navigation.navigate(path)}
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
		>
			<View>
				{icon}
				<Text>{text}</Text>
			</View>
		</Pressable>
	);
}
