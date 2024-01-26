import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
const ProfileIcon = () => (
	<Svg width={24} height={24} fill="none">
		<Circle cx={12} cy={7} r={4.25} stroke="#AFB2BF" strokeWidth={1.5} />
		<Path
			stroke="#AFB2BF"
			strokeWidth={1.5}
			d="m7.118 15.288.638-.299a10 10 0 0 1 8.488 0l.638.3A5.418 5.418 0 0 1 20 20.193c0 .997-.809 1.806-1.806 1.806H5.806A1.806 1.806 0 0 1 4 20.194a5.418 5.418 0 0 1 3.118-4.906Z"
		/>
	</Svg>
);
export default ProfileIcon;
