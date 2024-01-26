import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const CoursesIcon = () => (
	<Svg width={24} height={24} fill="none">
		<G clipPath="url(#a)">
			<Path
				stroke="#AFB2BF"
				strokeWidth={1.5}
				d="m4.65 11.294 5.374 2.874a4 4 0 0 0 3.773 0l5.373-2.874m-14.52 0L1.948 9.478C.653 8.61.805 6.661 2.219 6.004l7.599-3.531a5 5 0 0 1 4.19-.011l7.69 3.525c1.433.656 1.579 2.634.258 3.494l-2.785 1.813m-14.52 0v5.713c0 .523.203 1.026.607 1.36C6.358 19.272 8.852 21 11.91 21c3.058 0 5.553-1.727 6.653-2.634.403-.333.607-.835.607-1.359v-5.713"
			/>
			<Path stroke="#AFB2BF" d="M22 10v5" />
			<Path
				fill="#AFB2BF"
				d="m22.861 17.023-.368-2.148c-.095-.554-.89-.554-.986 0l-.368 2.148a4 4 0 0 0 .053 1.61l.322 1.341c.123.511.85.511.972 0l.322-1.341a4 4 0 0 0 .053-1.61Z"
			/>
		</G>
		<Defs>
			<ClipPath id="a">
				<Path fill="#fff" d="M0 0h24v24H0z" />
			</ClipPath>
		</Defs>
	</Svg>
);
export default CoursesIcon;
