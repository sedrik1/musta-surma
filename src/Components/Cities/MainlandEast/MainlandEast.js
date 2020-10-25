import React from 'react';
import { Popup, CircleMarker } from 'react-leaflet';
import { EastEurope as data } from '../../../Data/Cities/LocationData';

const MainlandEast = props => {
	return data.map(({ info, location, coordinates }, index) => {
		return (
			<CircleMarker
				key={index}
				onClick={() => props.handleOverlayClick([location, info])}
				center={coordinates}
				radius={7}
			>
				<Popup>{location}</Popup>
			</CircleMarker>
		);
	});
};

export default MainlandEast;
