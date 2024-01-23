import { useAtomValue } from 'jotai';
import { View, Text } from 'react-native';
import { authAtom } from '../../entities/auth/model/auth.state';
import { useEffect } from 'react';
import { router, useRootNavigationState } from 'expo-router';

export default function MyCourses() {
	const { access_token } = useAtomValue(authAtom);
	const state = useRootNavigationState();

	useEffect(() => {
		if (!state?.key) return;
		if (!access_token) {
			router.replace('/login');
		}
	}, [access_token, state]);

	return (
		<View>
			<Text>index</Text>
		</View>
	);
}
