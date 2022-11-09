import React, { useState } from 'react';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import WaterIcon from '@mui/icons-material/Water';

function Info(props) {

    if (props.result) {
        const result = props.result;
        var { main, name, sys, weather, wind } = result;
    }

    return (
        <div className="info-area">
            {props.result && <div className="info-area-left">
                <h3><ThermostatIcon id="temp-icon"/>Feels Like</h3>
                <p>{Math.round(main.feels_like) + "°"}</p>
            </div>}
            {props.result &&
                <div className="info-area-middle">
                    <h3><WaterIcon id="humidity-icon" />Humidity</h3>
                    <p>{main.humidity + "%"}</p>
                </div>}
            {props.result &&
                <div className="info-area-right">
                    <h3><AirIcon id="wind-icon" /> Wind Speed</h3>
                    <p>{Math.round(wind.speed) + " km/h"}</p>
                </div>}
        </div>
    )
}

export default Info
