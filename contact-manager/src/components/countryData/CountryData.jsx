import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CountryData.css"

// create custom icon
const customIcon = new Icon({
    iconUrl: require("../../icon/placeholder.png"),
    iconSize: [38, 38] // size of the icon
});


const CountryData = ({ countryData }) => {
    return (
        <div className='country__container'>
            <h3>Country Data :- </h3>
            <div className='map__container'>
                <MapContainer center={[20.5937, 78.9629]} zoom={13}>
                    {/* OPEN STREEN MAPS TILES */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        countryData && countryData.map((country) => (
                            <Marker key={country.country} position={[country.countryInfo.lat, country.countryInfo.long]} icon={customIcon}>
                                <Popup>
                                    <strong>{country.country}</strong>
                                    <br />
                                    Active Cases: {country.active}
                                    <br />
                                    Recovered: {country.recovered}
                                    <br />
                                    Deaths: {country.deaths}
                                </Popup>
                            </Marker>
                        ))
                    }
                </MapContainer>
            </div>
        </div>
    )
}

export default CountryData