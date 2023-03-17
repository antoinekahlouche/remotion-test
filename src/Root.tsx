import {Composition} from 'remotion';
import {Title} from './Title';
import {Planning} from './Planning';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={450}
				fps={30}
				width={2160}
				height={1080}
				defaultProps={{value: 'Montréal'}}
			/>
			<Composition
				id="Planning"
				component={Planning}
				durationInFrames={450}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
