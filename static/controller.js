/*const controller = () => {

     const getMinTemperature = weatherData => {
        console.log('im gere')
        return [Math.max(...weatherData.filter(item => new Date(item.time) >= getDay() && item.type === 'temperature').map(item => item.value))]
    }

    return {getMinTemperature}
}
export default controller*/


let controller = function () {
};

function getDay() {
    let d = new Date();
    return d.setDate(d.getDate() - 5);

}

controller.getMaxTemperature = function (weatherData) {
    return [Math.max(...weatherData.filter(item => new Date(item.time) >= getDay() && item.type === 'temperature').map(item => item.value))]
}

controller.getMinTemperature = function (weatherData) {
    return [Math.min(...weatherData.filter(item => new Date(item.time) >= getDay() && item.type === 'temperature').map(item => item.value))]
}

controller.getSum = function (weatherData) {
    weatherData.filter(item => new Date(item.time) >= getDay() && item.type === 'precipitation').reduce((accumulator, element) => {
        return accumulator + element.value;
    }, 0)
}

controller.getAverageWind = function (weatherData) {
    let arr = weatherData.filter(item => new Date(item.time) >= getDay() && item.type === 'wind speed');
    return arr.reduce((a, b) => a + b.value, 0) / arr.length
}

controller.getAverageCloud = function (weatherData) {
    let arr = weatherData.filter(item => new Date(item.time) >= getDay() && item.type === 'cloud coverage');
    return arr.reduce((a, b) => a + b.value, 0) / arr.length
}


export default controller;