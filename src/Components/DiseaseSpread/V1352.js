import React from 'react';
import { Polygon, Popup } from 'react-leaflet';
import { v1352 } from '../../Data/DiseaseSpread/DiseaseSpreadInfo'

const V1352 = () => {
    return(
        <Polygon color={v1352.colour} positions={v1352.coordinates}>
            <Popup>{v1352.date}</Popup>
        </Polygon>
    );
};

export default V1352;