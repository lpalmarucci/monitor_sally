import React from 'react';
import ChartTemperatureComponent from '../components/ChartTemperatureComponent';

function ChartTemperatureContainer(){

    const defaultOptions = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "light1", // "light1", "dark1", "dark2"
        title:{
            text: "Temperature"
        },
        axisY: {
            title: "°C",
            suffix: "°"
        },
        axisX: {
            title: "Ora",
            // prefix: "W",
            interval: 1 
        }
    }

    return (
        <div>
            <ChartTemperatureComponent options={defaultOptions}/>
        </div>
    )
}

export default ChartTemperatureContainer;