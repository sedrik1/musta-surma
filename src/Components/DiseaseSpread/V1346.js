import React from 'react';
import { Polygon, Popup } from 'react-leaflet';
import { v1346 } from '../../Data/DiseaseSpread/DiseaseSpreadInfo'

const V1346 = () => {
    return(
        <Polygon color={v1346.colour} positions={v1346.coordinates}>
            <Popup>{v1346.date}</Popup>
        </Polygon>
    );
};

export default V1346;