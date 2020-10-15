import React from 'react';
import { Polygon, Popup } from 'react-leaflet';
import { v1353 } from '../../Data/DiseaseSpread/DiseaseSpreadInfo'

const V1353 = () => {
    return(
        <Polygon color={v1353.colour} positions={v1353.coordinates}>
            <Popup>{v1353.date}</Popup>
        </Polygon>
    );
};

export default V1353;