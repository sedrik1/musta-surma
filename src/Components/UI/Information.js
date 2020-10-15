import React from 'react';

const Information = () => {
	const infoStyle = {
		top: '0',
		left: '0',
		padding: '10px',
		marginLeft: '10px',
		marginTop: '90px',
		zIndex: '2',
		position: 'fixed',
		backgroundColor: '#fff',
		borderRadius: '5px',
		border: '2px solid #bfbfbf',
		width: '66px',
		height: '140px',
		textAlign: 'center',
		transition: '0.5s ease-out',
	};

	const handleCloseInfo = () => {
		if (document.getElementById('info').style.marginLeft === '10px') {
			document.getElementById('info').style.marginLeft = '-58px';
			document.getElementById('info').style.height = '20px';
			document.getElementById('innerInfo').style.opacity = '0';
		} else {
			document.getElementById('info').style.height = '140px';
			document.getElementById('info').style.marginLeft = '10px';
			setTimeout(() => {
				document.getElementById('innerInfo').style.opacity = '1';
			}, 325);
		}
	};

	return (
		<div id="info" style={infoStyle}>
			<div
				onClick={() => handleCloseInfo()}
				title="Sulje tietolaatikko"
				style={{
					cursor: 'pointer',
					float: 'right',
					paddingBottom: '10px',
				}}
			>
				X
			</div>

			<div
				id="innerInfo"
				style={{
					pointerEvents: 'none',
					marginTop: '10px',
					opacity: '1',
					transition: '0.12s',
				}}
			>
				<span
					style={{ marginTop: '0px', borderTop: '1px solid #555555' }}
				>
					Maareitit
				</span>
				<svg height="21" width="66">
					<circle cx="33" cy="11" r="7" fill="#8a0303" />
				</svg>
				<span style={{ marginTop: '0px' }}>Merireitit</span>
				<svg height="21" width="66">
					<circle cx="33" cy="11" r="7" fill="#003366" />
				</svg>
				<hr />
			</div>
		</div>
	);
};

export default Information;
