import React from 'react'
import CanvasJSReact from '../lib/canvasjs.react'

// Dichiarazione variabili per Charts
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ChartTemperatureComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            options : this.props.options,
            dataPoints : [],
            xVal : 0,
            yVal : 15,
            updateInterval : 1000
        };
        this.getData = this.getData.bind(this);
    }

    componentDidMount(){
        // TODO:
        // Aggiungere il fetch dei dati da Google Drive Sheet
        setInterval(() => this.getData(),500);
    }

    getData(){
        let new_yVal = Math.floor(Math.random() * (40 + 1));
        let dps = this.state.dataPoints.slice();
        let dpsColor = new_yVal >= 50 ? "#e40000" : new_yVal >= 30 ? "#ec7426" : new_yVal >= 10 ? "#88df86" : "#81c2ea ";
        dps.push({x: this.state.xVal,y: new_yVal,color: dpsColor});
		if (dps.length >  10 ) {
            dps.shift();    
        }
        this.setState(prevState =>{
                return {
                    dataPoints : dps,
                    xVal : ++prevState.xVal,
                    yVal : new_yVal,
            }
        })
		this.chart.render();
    }

    render() {	
        const current_data = this.state.dataPoints;
        let new_options = this.state.options;
        new_options.data = [{}];
        new_options.data[0].type = "line";
        new_options.data[0].dataPoints = this.state.dataPoints;
      
		return (
            <div className="chartContainer">
                <div className="chart">
                    <CanvasJSChart options = {new_options} 
                        onRef={ref => this.chart = ref}
                    />
                </div>
            </div>
		);
    }
}

export default ChartTemperatureComponent;