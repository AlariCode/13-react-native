import { View, StyleSheet, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { useEffect } from 'react';
import { CourseCard } from '../../widget/course/ui/CourseCard/CourseCard';
import { StudentCourseDescription } from '../../entities/course/model/course.model';
import { Colors } from '../../shared/tokens';
import { Button } from '../../shared/Button/Button';
import * as Notificaitons from 'expo-notifications';

export default function MyCourses() {
	const { isLoading, courses } = useAtomValue(courseAtom);
	const loadCourse = useSetAtom(loadCourseAtom);

	useEffect(() => {
		loadCourse();
	}, []);

	const renderCourse = ({ item }: { item: StudentCourseDescription }) => {
		return (
			<View style={styles.item}>
				<CourseCard {...item} />
			</View>
		);
	};

	const allowsNotification = async () => {
		const settings = await Notificaitons.getPermissionsAsync();
		return (
			settings.granted || settings.ios?.status == Notificaitons.IosAuthorizationStatus.PROVISIONAL
		);
	};

	const requestPermissions = async () => {
		return Notificaitons.requestPermissionsAsync({
			ios: {
				allowAlert: true,
				allowBadge: true,
				allowSound: true,
			},
		});
	};

	const scheduleNotification = async () => {
		const granted = await allowsNotification();
		if (!granted) {
			await requestPermissions();
		}
		Notificaitons.scheduleNotificationAsync({
			content: {
				title: 'Не забудь пройти курс',
				body: 'Не забывай учиться каждый день!',
				data: { success: true },
			},
			trigger: {
				seconds: 5,
			},
		});
	};

	return (
		<>
			{isLoading && (
				<ActivityIndicator style={styles.activity} size="large" color={Colors.primary} />
			)}
			<Button text="Напомнить" onPress={scheduleNotification} />
			{courses.length > 0 && (
				<FlatList
					refreshControl={
						<RefreshControl
							tintColor={Colors.primary}
							titleColor={Colors.primary}
							refreshing={isLoading}
							onRefresh={loadCourse}
						/>
					}
					data={courses}
					keyExtractor={(item) => item.id.toString()}
					renderItem={renderCourse}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	item: {
		padding: 20,
	},
	activity: {
		marginTop: 30,
	},
});
