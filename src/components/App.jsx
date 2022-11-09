import { Handshake } from "@mui/icons-material"
import React,{useState} from "react"
import ReactDOM from "react-dom"
import Search from "./Search"
import Weather from "./Weather"
import Info from "./Info"

function App() {
    const [result, setResult] = useState([])

    function handleResult(result){
        setResult(result)
    }

    return (
        <div className="main-container">
            <Search 
            result={handleResult}

            />
            <Weather 
            result={result.length !== 0 ? result : null}
            />
            <Info 
            result={result.length!== 0? result : null}
            />
            <img className="bg-img"
                src="https://images.theconversation.com/files/232705/original/file-20180820-30593-1nxanpj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                alt="" />
        </div>
    )
}

export default App