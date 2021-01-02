import React from 'react';
import ChartHumidityComponent from '../components/ChartHumidityComponent';

function ChartHumidityContainer(){

    const defaultOptions = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "light1", // "light1", "dark1", "dark2"
        title:{
            text: "Humidity"
        },
        axisY: {
            title: "Umidità",
            suffix: "%"
        },
        axisX: {
            title: "Ora",
            // prefix: "W",
            interval: 1 
        }
    }

    return (
        <div>
            <ChartHumidityComponent options={defaultOptions}/>
        </div>
    )
}

export default ChartHumidityContainer;