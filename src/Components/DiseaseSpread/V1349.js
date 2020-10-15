import React from 'react';
import { Polygon, Popup } from 'react-leaflet';
import { v1349 } from '../../Data/DiseaseSpread/DiseaseSpreadInfo'

const V1349 = () => {
    return(
        <Polygon color={v1349.colour} positions={v1349.coordinates}>
            <Popup>{v1349.date}</Popup>
        </Polygon>
    );
};

export default V1349;