import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
require('dotenv').config()

const Map = ({clickedTruck, showModal}) => {
    const location = {lat: clickedTruck.latitude, lng: clickedTruck.longitude}

    const filteredMapStyles = {
        height: "75vh",
        width: "100%",
        filter: "brightness(30%)"
    }
    const mapStyles = {
        height: "74vh",
        width: "62vh"
    }

    return (
        Object.keys(clickedTruck).length !== 0  ?
            <LoadScript
                googleMapsApiKey= {process.env.REACT_APP_API_KEY}>
            <GoogleMap
                mapContainerStyle = {showModal ? filteredMapStyles : mapStyles}
                zoom = { 13 }
                center = { location } 
            >
            {
                <Marker 
                    key={clickedTruck.name} 
                    position={location} />
            })
            </GoogleMap >
            </LoadScript>
            :
            <div>Click a location card to load the map</div>
    )
}

export default Map;