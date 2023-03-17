import {Series, random} from 'remotion';
import {Display} from './Display';

const rand = (i: number, min: number, max: number) => {
	return Math.floor(random(i) * (max - min + 1) + min);
};

export const Writing = ({value}: any) => {
	return value.split('').map((v: any, i: any) => {
		const partialValue = value.substring(0, i + 1);
		return (
			<Series.Sequence
				name={partialValue}
				key={i}
				durationInFrames={rand(i, 3, 5)}
				layout="none"
			>
				<Display value={partialValue} />
			</Series.Sequence>
		);
	});
};
