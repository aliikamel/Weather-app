import React, { useState, setIsLoaded, setError } from "react";
import { Fab } from "@mui/material";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

const api = {
    metricURL: "http://api.openweathermap.org/data/2.5/weather?&appid=2abd9406fa7c510103029cb8be4518d7&units=metric&",
    imperialURL: "http://api.openweathermap.org/data/2.5/weather?&appid=2abd9406fa7c510103029cb8be4518d7&units=imperial&"
}


function Search(props) {

    const [search, setSearch] = useState("")
    const [items, setItems] = useState([])

    function handleChange(event) {
        setSearch(event.target.value)
    }

    function handleSearch() {
        if (search !== "") {
            fetch(api.metricURL + "q=" + search)
                .then(res => res.json())
                .then(
                    (result) => {
                        setItems(result)
                        props.result(items)
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(err);
                    }
                )
        }

    }


    return (
        <div className="search-area">
            <input value={search} onChange={handleChange} type="text" spellCheck="false" name="search" id="" placeholder="Search for a Country/City" />
            <Fab size="small" id="search-fab" onClick={handleSearch}><LocationSearchingIcon id="search-icon" /></Fab>
        </div>
    )
}

export default Search