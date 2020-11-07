import React from 'react';

const ColourLegends = () => {
	const colours = [
		{
			name: 'v. 1346',
			colour: '#ff0000',
		},
		{
			name: 'v. 1347',
			colour: '#f79f66',
		},
		{
			name: 'v. 1348',
			colour: '#fc5d23',
		},
		{
			name: 'v. 1349',
			colour: '#fc2356',
		},
		{
			name: 'v. 1350',
			colour: '#fc23c2',
		},
		{
			name: 'v. 1351',
			colour: '#c923fc',
		},
		{
			name: 'v. 1352',
			colour: '#5d23fc',
		},
		{
			name: 'v. 1353',
			colour: '#2356fc',
		},
		{
			name: 'Maareitit',
			colour: '#8a0303',
		},
		{
			name: 'Merireitit',
			colour: '#003366',
		},
		{
			name: 'Kaupungit',
			colour: '#000',
		},
		{
			name: 'Kultaisen ordan raja',
			colour: '#FFD700',
		},
	];
	return (
		<>
			<p>Taudin leviäminen</p>
			<ul id="colours-list">
				{colours.map(({ name, colour }) => {
					return (
						<li key={colour}>
							<span>{name}</span>
							<svg height="20" width="15">
								<circle cx="7" cy="10" r="5" fill={colour} />
							</svg>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ColourLegends;
