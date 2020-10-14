export default window => {
    const document = window.document
    const weatherDataDiv = document.getElementById('weather_data')
    const listeners = []

    const listen = l => listeners.push(l)

    const displayWeatherDataItem = p => {

       console.log('p is '+p)
        const paragraph = weatherDataDiv.appendChild(document.createElement('p'))
        paragraph.appendChild(document.createTextNode('The minimal temperature in last five days was: '))
        paragraph.appendChild(document.createTextNode(p.minTemp))
        paragraph.appendChild(document.createTextNode('The maximal temperature in last five days was: '))
        paragraph.appendChild(document.createTextNode(p.maxTemp))
        paragraph.appendChild(document.createTextNode('The total precipitation in last five days was: '))
        paragraph.appendChild(document.createTextNode(p.sumPerc))
        paragraph.appendChild(document.createTextNode('The average wind speed in last five days was: '))
        paragraph.appendChild(document.createTextNode(p.avgWind))
        paragraph.appendChild(document.createTextNode('The average cloud coverage in last five days was: '))
        paragraph.appendChild(document.createTextNode(p.avgCloud))
        paragraph.appendChild(document.createTextNode('The dominant wind directon in last five days was: '))
        paragraph.appendChild(document.createTextNode(p.minTemp))


    }

    const update = model => {
        while (weatherDataDiv.firstChild) weatherDataDiv.removeChild(weatherDataDiv.firstChild)
        //model.weatherData().forEach(displayWeatherDataItem)
        model.valuesToDisplay().forEach(displayWeatherDataItem)
    }
    const prompt = window.prompt.bind(window)

    return {displayWeatherDataItem, update, listen, prompt}
}
