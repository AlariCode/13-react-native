import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ImageUploader } from '../../shared/ImageUploader/ImageUploader';
import { Gaps } from '../../shared/tokens';
import { Avatar } from '../../entities/user/ui/Avatar/Avatar';
import { useAtom } from 'jotai';
import { updateProfileAtom } from '../../entities/user/model/user.state';
import { Button } from '../../shared/Button/Button';

export default function Profile() {
	const [image, setImage] = useState<string | null>(null);
	const [profile, updateProfile] = useAtom(updateProfileAtom);

	const submitProfile = () => {
		if (!image) {
			return;
		}
		updateProfile({ photo: image });
	};

	useEffect(() => {
		if (profile && profile.profile?.photo) {
			setImage(profile.profile?.photo);
		}
	}, [profile]);

	return (
		<View>
			<View style={styles.container}>
				<Avatar image={image} />
				<ImageUploader onUpload={setImage} onError={(e) => console.log(e)} />
			</View>
			<Button text="Сохранить" onPress={submitProfile} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: Gaps.g20,
		alignItems: 'center',
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
});
