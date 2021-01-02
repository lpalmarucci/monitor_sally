import React from 'react'

import CanvasJSReact from '../lib/canvasjs.react'

function ChartHumidityComponent(props){

    //Creazione canvas per grafico
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;


    return (
        <div>
            <h1>ChartHumidityComponent</h1>
            <CanvasJSChart options={props.options} />
        </div>
    )
}

export default ChartHumidityComponent;