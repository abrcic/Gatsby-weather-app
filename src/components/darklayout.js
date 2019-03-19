import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

//import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={ graphql`
        query {
          weatherData {
            latitude
            longitude
            timezone
            locationName
          currently {
            summary
            icon
            nearestStormDistance
            precipIntensity
            precipProbability
            temperature
            dewPoint
            pressure
            windSpeed
            windGust
            windBearing
            cloudCover
            uvIndex
            visibility
            ozone
            }
          }
  }   `
}
  render={data => (
    <div id="main">
      <Link to="/" style={{ float: `right`}}>Home</Link>
      {children}
      <table>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Latitude & Longitude</th>
            <th>Currently Temperature (F&deg;)</th>
            <th>Cloud Cover</th>
          </tr>
          </thead>
          <tbody>
            <tr>
            <td>{data.weatherData.currently.summary}</td>
            <td>{data.weatherData.latitude} | {data.weatherData.longitude}</td>
            <td>{data.weatherData.currently.temperature}&deg;F</td>
            <td>{data.weatherData.currently.cloudCover}</td>
          </tr>
          </tbody>
        </table>
    </div>
  )}
/>
)