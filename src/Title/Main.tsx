import {AbsoluteFill, useVideoConfig, Loop, Series} from 'remotion';
import {Cursor} from './Cursor';
import {Writing} from './Writing';
import {Display} from './Display';

export const Main = ({value}: any) => {
	const {fps} = useVideoConfig();

	return (
		<AbsoluteFill style={container}>
			<span style={content}>
				<Series>
					<Series.Sequence
						name="Empty"
						durationInFrames={2 * fps}
						layout="none"
					>
						{' '}
					</Series.Sequence>
					{Writing({value})}
					<Series.Sequence
						name="Complete"
						durationInFrames={4 * fps}
						layout="none"
					>
						{value}
					</Series.Sequence>
					{/* <Series.Sequence
						name="Selected"
						durationInFrames={0.5 * fps}
						layout="none"
					>
						<Display value={value} isSelected />
					</Series.Sequence>
					<Series.Sequence
						name="Empty"
						durationInFrames={1 * fps}
						layout="none"
					>
						<Display value="" sound="backspace" />
					</Series.Sequence>
					<Series.Sequence name="End" durationInFrames={2 * fps} layout="none">
						END
					</Series.Sequence> */}
				</Series>
				<Loop durationInFrames={fps} layout="none">
					<Cursor />
				</Loop>
			</span>
		</AbsoluteFill>
	);
};

const container = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

const content = {
	fontSize: '10rem',
	fontWeight: 900,
	textTransform: 'uppercase',
	textAlign: 'center',
	padding: '300px',
};
