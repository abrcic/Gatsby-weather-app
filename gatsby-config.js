module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`,
    /*  pathPrefix: '/static-gatsby-weather',*/
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS Weather App",
        short_name: "weather-app",
        start_url: "/",
        background_color: "#4CAF50",
        theme_color: "#4CAF50",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "./static/favicon.ico", // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-offline',

    {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '1cd2365fe3b4e07fb62e997762c16e5a',
        location: 'Chicago',
        units: 'imperial',
        type: 'weather'
      },
    },

    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '38a71ae607f270345874689c5a87cfcf',
        latitude: '43.03',
        longitude: '-87.74',
        exclude: ['minutely']
      },
    },

  ]
}