import { useEffect, useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

export function useScreenOrientation() {
	const [orientation, setOrientation] = useState<ScreenOrientation.Orientation>();

	useEffect(() => {
		ScreenOrientation.getOrientationAsync().then((o) => setOrientation(o));
		ScreenOrientation.addOrientationChangeListener((e) => {
			setOrientation(e.orientationInfo.orientation);
		});
		return () => {
			ScreenOrientation.removeOrientationChangeListeners();
		};
	}, []);

	return orientation;
}
