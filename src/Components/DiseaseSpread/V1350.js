import React from 'react';
import { Polygon, Popup } from 'react-leaflet';
import { v1350 } from '../../Data/DiseaseSpread/DiseaseSpreadInfo'

const V1350 = () => {
    return(
        <Polygon color={v1350.colour} positions={v1350.coordinates}>
            <Popup>{v1350.date}</Popup>
        </Polygon>
    );
};

export default V1350;