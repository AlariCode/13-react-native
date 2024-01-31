import {
	MediaTypeOptions,
	launchImageLibraryAsync,
	useMediaLibraryPermissions,
	PermissionStatus,
} from 'expo-image-picker';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import UploadIcon from '../../assets/icons/upload';
import { Colors, Fonts, Gaps, Radius } from '../tokens';
import FormData from 'form-data';
import axios, { AxiosError } from 'axios';
import { FILE_API } from '../api';
import { UploadResponse } from './ImageUploader.interface';

interface ImageUploaderProps {
	onUpload: (uri: string) => void;
}

export function ImageUploader({ onUpload }: ImageUploaderProps) {
	const [libraryPermissions, requestLibraryPermission] = useMediaLibraryPermissions();

	const varifyMediaPermissions = async () => {
		if (libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
			const res = await requestLibraryPermission();
			return res.granted;
		}
		if (libraryPermissions?.status === PermissionStatus.DENIED) {
			Alert.alert('Недостаточно прав для доступа к фото');
			return false;
		}
		return true;
	};

	const pickImage = async () => {
		const isPermissionGranted = await varifyMediaPermissions();
		if (!isPermissionGranted) {
			return;
		}
		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5,
		});
		if (!result.assets) {
			return;
		}
		await uploadToServer(result.assets[0].uri, result.assets[0].fileName ?? '');
	};

	const uploadToServer = async (uri: string, name: string) => {
		const formData = new FormData();
		formData.append('files', {
			uri,
			name,
			type: 'image/jpeg',
		});
		try {
			const { data } = await axios.post<UploadResponse>(FILE_API.uploadImage, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			onUpload(data.urls.original);
		} catch (error) {
			if (error instanceof AxiosError) {
				console.error(error);
			}
		}
	};

	return (
		<Pressable onPress={pickImage}>
			<View style={styles.container}>
				<UploadIcon />
				<Text style={styles.text}>Загрузить изображение</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: Gaps.g8,
		backgroundColor: Colors.violetDark,
		borderRadius: Radius.r10,
		paddingHorizontal: 20,
		paddingVertical: 17,
		alignItems: 'center',
	},
	text: {
		fontSize: Fonts.f14,
		fontFamily: Fonts.regular,
		color: Colors.white,
	},
});
