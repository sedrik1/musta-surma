import React from 'react';
import { Polygon, Popup } from 'react-leaflet';
import { v1351 } from '../../Data/DiseaseSpread/DiseaseSpreadInfo'

const V1351 = () => {
    return(
        <Polygon color={v1351.colour} positions={v1351.coordinates}>
            <Popup>{v1351.date}</Popup>
        </Polygon>
    );
};

export default V1351;