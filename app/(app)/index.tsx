import { useAtom } from 'jotai';
import { View, Text } from 'react-native';
import { profileAtom } from '../../entities/user/model/user.state';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function MyCourses() {
	const [profile] = useAtom(profileAtom);

	useEffect(() => {
		AsyncStorage.setItem('demo', 'test').then(async () => {
			console.log(await AsyncStorage.getAllKeys());
			console.log(await AsyncStorage.getItem('demo'));
			console.log(await AsyncStorage.removeItem('demo'));
			console.log(await AsyncStorage.getItem('demo'));
		});
	}, []);

	return (
		<View>
			<Text>{profile.profile?.name}</Text>
		</View>
	);
}
