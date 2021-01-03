

import React from 'react';
import ChartContainer from './containers/ChartContainer';
import './Charts.css';

function App() {
  const charts_temp_options = {
    animationEnabled: true,
    exportEnabled: false,
    theme: "light1", // "light1", "dark1", "dark2"
    title : {
      text : "Temperature"
    },
    axisY : {
      title : "Temperature",
      suffix : "°"
    },
    axisX : {
      title : "Time"
    }
  }

  const charts_humi_options = {
    animationEnabled: true,
    exportEnabled: false,
    theme: "light1", // "light1", "dark1", "dark2"
    title : {
      text : "Humidity"
    },
    axisY : {
      title : "Percentage",
      suffix : "%"
    },
    axisX : {
      title : "Time"
    }
  }

  return (
    <div className="wrapper">
      <ChartContainer name="Temperature" options={charts_temp_options}/>
      <ChartContainer name="Humidity" options={charts_humi_options}/>
    </div>
  );
}

export default App;
