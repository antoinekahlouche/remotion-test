export const Overlay = () => {
	return (
		<div style={style}>
			<span>
				Marion <b>MESSANA</b>
			</span>
			<br />
			<span>
				Antoine <b>KAHLOUCHE</b>
			</span>
		</div>
	);
};

const style = {
	textAlign: 'right',
	position: 'absolute',
	right: 0,
	bottom: 0,
	padding: '0 50px 40px 0',
	opacity: '50%',
};
