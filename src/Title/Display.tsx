import {Audio, staticFile, random} from 'remotion';

const rand = (i: number, min: number, max: number) => {
	return Math.floor(random(i) * (max - min + 1) + min);
};

export const Display = ({value, isSelected, sound}: any) => {
	if (!sound) {
		if (value && value.at(-1) === ' ') sound = 'space';
		else sound = `key${rand(value, 1, 5)}`;
	}

	return (
		<span>
			<Audio src={staticFile(`/${sound}.wav`)} />
			<span style={isSelected ? selected : null}>{value}</span>
		</span>
	);
};

const selected = {
	backgroundColor: '#212b36',
};
