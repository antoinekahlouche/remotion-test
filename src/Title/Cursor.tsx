import {useVideoConfig, Series} from 'remotion';

export const Cursor = () => {
	const {fps} = useVideoConfig();

	return (
		<Series>
			<Series.Sequence
				name="Visible"
				durationInFrames={fps * 0.5}
				layout="none"
			>
				_
			</Series.Sequence>
			<Series.Sequence
				name="Invisible"
				durationInFrames={fps * 0.5}
				layout="none"
			>
				&nbsp;
			</Series.Sequence>
		</Series>
	);
};
