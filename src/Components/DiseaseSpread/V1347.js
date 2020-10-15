import React from 'react';
import { Polygon, Popup } from 'react-leaflet';
import { v1347 } from '../../Data/DiseaseSpread/DiseaseSpreadInfo'

const V1347 = () => {
    return(
        <Polygon color={v1347.colour} positions={v1347.coordinates}>
            <Popup>{v1347.date}</Popup>
        </Polygon>
    );
};

export default V1347;