import {AbsoluteFill} from 'remotion';
import {Overlay} from './Overlay';
import {Main} from './Main';

export const Title = ({value}: any) => {
	return (
		<AbsoluteFill style={style}>
			<Overlay />
			<Main value={value} />
		</AbsoluteFill>
	);
};

const style = {
	color: 'white',
	fontFamily: 'JetBrains Mono',
	fontWeight: 100,
	fontSize: '1.5rem',
	backgroundColor: 'black',
};
