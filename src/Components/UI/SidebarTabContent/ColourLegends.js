import React from 'react';

const ColourLegends = () => {
	return (
		<>
			<p>Taudin leviäminen</p>
			<ul id="colours-list">
				<li>
					<span>v. 1346</span>
					<svg height="20" width="15">
						<circle cx="7" cy="10" r="5" fill="#ff0000" />
					</svg>
				</li>
				<li>
					<span>v. 1347</span>
					<svg height="20" width="15">
						<circle cx="7" cy="10" r="5" fill="#f79f66" />
					</svg>
				</li>
				<li>
					<span>v. 1348</span>
					<svg height="20" width="15">
						<circle cx="7" cy="10" r="5" fill="#fc5d23" />
					</svg>
				</li>
				<li>
					<span>v. 1349</span>
					<svg height="20" width="15">
						<circle cx="7" cy="10" r="5" fill="#fc2356" />
					</svg>
				</li>
				<li>
					<span>v. 1350</span>
					<svg height="20" width="15">
						<circle cx="7" cy="10" r="5" fill="#fc23c2" />
					</svg>
				</li>
				<li>
					<span>v. 1351</span>
					<svg height="20" width="15">
						<circle cx="7" cy="10" r="5" fill="#c923fc" />
					</svg>
				</li>
				<li>
					<span>v. 1352</span>
					<svg height="20" width="15">
						<circle cx="7" cy="10" r="5" fill="#5d23fc" />
					</svg>
				</li>
				<li>
					<span>v. 1353</span>
					<svg height="20" width="15">
						<circle cx="7" cy="10" r="5" fill="#2356fc" />
					</svg>
				</li>
				<li className="odd">
					<span>Maareitit</span>
					<svg height="20" width="15">
						<circle cx="7" cy="10" r="5" fill="#8a0303" />
					</svg>
				</li>
				<li className="odd">
					<span>Merireitit</span>
					<svg height="20" width="15">
						<circle cx="7" cy="10" r="5" fill="#003366" />
					</svg>
				</li>
				<li className="odd">
					<span>Kultaisen ordan raja</span>
					<svg height="20" width="15">
						<circle cx="7" cy="10" r="5" fill="#FFD700" />
					</svg>
				</li>
			</ul>
		</>
	);
};

export default ColourLegends;
