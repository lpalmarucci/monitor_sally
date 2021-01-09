import React, {useEffect, useState} from 'react';
import Tabletop from 'tabletop';
import ChartComponent from '../components/ChartComponent';


function ChartContainer(props){
    var display = <h1>Loading...</h1>;

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

    const [q_data,setData] = useState([]);

    useEffect(() => {
        setInterval(() => {
            Tabletop.init( {
                    key: 'https://docs.google.com/spreadsheets/d/18W3JiJbGZPc3IT2YhUlwp2XYH6lnqxG4nqsFGbXsj9o/edit?usp=sharing',
                    simpleSheet: true 
                }).then((data) => {
                    setData(data);
                })
        },5000);
    },[]);

    if(q_data.length > 0){
        display = <div className="chartContainer"> 
                    <div className="chart-1">
                        <ChartComponent 
                            data_from_sheet={q_data} 
                            options={charts_temp_options}
                            name="Temperature"
                        />
                    </div>

                    <div className="chart-2">
                        <ChartComponent 
                            data_from_sheet={q_data} 
                            options={charts_humi_options}
                            name="Humidity"
                        />
                    </div>
                  </div>
    }

    return ( <div> {display} </div> )
}

export default ChartContainer;