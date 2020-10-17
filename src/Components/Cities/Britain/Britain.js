import React from 'react';
import { Popup, CircleMarker } from 'react-leaflet';
import { Britain as data } from '../../../Data/Cities/LocationData';

const Britain = props => {
	return data.coordinates.map((marker, index) => {
		return (
			<CircleMarker
				key={index}
				onClick={() => props.handleOverlayClick(data.info[index])}
				center={marker}
				radius={7}
			>
				<Popup>{data.info[index].location}</Popup>
			</CircleMarker>
		);
	});
};

export default Britain;
