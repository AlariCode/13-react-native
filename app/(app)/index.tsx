import { useAtom } from 'jotai';
import { View, Text } from 'react-native';
import { profileAtom } from '../../entities/user/model/user.state';
import axios from 'axios';
import { API } from '../../entities/auth/api/api';
import { useEffect } from 'react';
import { IAuthResponse } from '../../entities/auth/model/auth.intefaces';

export default function MyCourses() {
	const [profile] = useAtom(profileAtom);

	const login = async () => {
		const { data } = await axios.post<IAuthResponse>(API.login, {
			email: 'vasia@pupkin.ru',
			password: '123456789',
		});
		console.log(data);
	};

	useEffect(() => {
		login();
	}, []);

	return (
		<View>
			<Text>{profile.profile?.name}</Text>
		</View>
	);
}
