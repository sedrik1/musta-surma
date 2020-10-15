import React from 'react';
import { Polygon, Popup } from 'react-leaflet';
import { v1348 } from '../../Data/DiseaseSpread/DiseaseSpreadInfo'

const V1348 = () => {
    return(
        <Polygon color={v1348.colour} positions={v1348.coordinates}>
            <Popup>{v1348.date}</Popup>
        </Polygon>
    );
};

export default V1348;