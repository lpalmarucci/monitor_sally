

import React from 'react';
import ChartHumidityContainer from './containers/ChartHumidityContainer';
import ChartTemperatureContainer from './containers/ChartTemperatureContainer';
import './Charts.css';

function App() {
  
  const styles = {
    display : "flex"
  }

  return (
    <div style={styles}>
      <ChartHumidityContainer />
      <ChartTemperatureContainer />
    </div>
  );
}

export default App;
