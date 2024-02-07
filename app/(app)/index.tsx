import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { useEffect } from 'react';
import { CourseCard } from '../../entities/course/ui/CourseCard/CourseCard';
import { Gaps } from '../../shared/tokens';

export default function MyCourses() {
	const { isLoading, error, courses } = useAtomValue(courseAtom);
	const loadCourse = useSetAtom(loadCourseAtom);

	useEffect(() => {
		loadCourse();
	}, []);

	return (
		<ScrollView>
			<View style={styles.wrapper}>
				{courses.length > 0 && courses.map((c) => <CourseCard {...c} key={c.id} />)}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'column',
		gap: Gaps.g20,
		padding: 20,
	},
});
