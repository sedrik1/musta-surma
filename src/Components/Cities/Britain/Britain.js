import React from 'react';
import { Popup, CircleMarker } from 'react-leaflet';
import { Britain as data } from '../../../Data/Cities/LocationData';

const Britain = props => {
	return data.map(({ reference, info, location, coordinates }, index) => {
		return (
			<CircleMarker
				key={index}
				onClick={() =>
					props.handleOverlayClick({ location, info, reference })
				}
				center={coordinates}
				radius={7}
			>
				<Popup>{location}</Popup>
			</CircleMarker>
		);
	});
};

export default Britain;
