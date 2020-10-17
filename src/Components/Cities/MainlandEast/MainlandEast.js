import React from 'react';
import { Popup, CircleMarker } from 'react-leaflet';
import { MainlandEast as data } from '../../../Data/Cities/LocationData';

const MainlandEast = props => {
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

export default MainlandEast;
