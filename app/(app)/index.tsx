import { View, Text } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { useEffect } from 'react';

export default function MyCourses() {
	const { isLoading, error, courses } = useAtomValue(courseAtom);
	const loadCourse = useSetAtom(loadCourseAtom);

	useEffect(() => {
		loadCourse();
	}, []);

	return (
		<View>
			<Text>index</Text>
			{courses.length > 0 && courses.map((c) => <Text key={c.id}>{c.title}</Text>)}
		</View>
	);
}
