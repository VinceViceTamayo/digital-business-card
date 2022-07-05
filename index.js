import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Social from "./components/Social"

function Main() {
    return(
        <main>
            <Info />
            <About />
            <Interests />
            <Social />
        </main>
    )
}

ReactDOM.createRoot(<Main />, document.getElementById("root"))
