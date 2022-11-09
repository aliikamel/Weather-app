import React, { useState } from "react";
import { Fab } from "@mui/material";
import FmdGoodIcon from '@mui/icons-material/FmdGood';


function Weather(props) {




    if (props.result) {
        const result = props.result;
        var { main, name, sys, weather, wind } = result;
        var iconURL = "http://openweathermap.org/img/wn/" + weather[0].icon + "@2x.png"
    }







    return (
        <div className="weather-area">
            <div className="weather-area-header">
                <h2 id="location"> <FmdGoodIcon id="location-icon"/>{props.result ? name + ", " + sys.country : "London, UK"}</h2>
            </div>
            <h1 id="temperature">{props.result ? Math.round(main.temp) + "°" : "21°"}</h1>
            <Fab 
                size="small"
                id="metric-fab">
                <p>{"°F"}</p>
            </Fab>
            {props.result && <h3 id="description">{weather[0].description}</h3>}
        </div>
    )
}

export default Weather