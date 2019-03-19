import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
// import "/home/cabox/workspace/gatsby-hello-world/src/styles/global.css"

export default () => (
  <div id="main">
    <Header headerText="Gatsby Weather App" />
    <Link to="/"><div className="button">Home</div></Link>
    <br></br>
    <Link to="/darkabout"><div className="button mx">DarkSky Weather</div></Link>
    <br></br>
    <Link to="/openabout"><div className="button">OpenWeather Weather</div></Link>
  </div>
)