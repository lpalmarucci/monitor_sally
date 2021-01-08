import React, {useEffect, useState} from 'react';
import Tabletop from 'tabletop';
import ChartComponent from '../components/ChartComponent';

function ChartContainer(props){

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

    const [data,setData] = useState([
        // {x: 0, y: 30, color: "#ec7426"},
        // {x: 1, y: 29, color: "#88df86"},
        // {x: 2, y: 30, color: "#ec7426"},
        // {x: 3, y: 30, color: "#ec7426"},
        // {x: 4, y: 30, color: "#ec7426"},
        // {x: 5, y: 30, color: "#ec7426"},
        // {x: 6, y: 10, color: "#88df86"},
        // {x: 7, y: 30, color: "#ec7426"},
        // {x: 8, y: 30, color: "#ec7426"},
        // {x: 9, y: 30, color: "#ec7426"},
        // {x: 10, y: 30, color: "#ec7426"},
        // {x: 11, y: 30, color: "#ec7426"},
        // {x: 12, y: 30, color: "#ec7426"}
    ]);

    useEffect(() => {
        // setTimeout(() => {
            Tabletop.init( {
                    key: 'https://docs.google.com/spreadsheets/d/18W3JiJbGZPc3IT2YhUlwp2XYH6lnqxG4nqsFGbXsj9o/edit?usp=sharing',
                    simpleSheet: true 
                }).then((data) => {

                    console.log("Chart container",data)
                    if(props.name == "Temperature"){
                    }
                    setData(data);
                })
        // }, 2000);
    },[]);

    return (
        <div className="chartContainer">
            <ChartComponent 
                data_from_sheet={data} 
                options={charts_temp_options}
                name="Temperature"
            />

            <ChartComponent 
                data_from_sheet={data} 
                options={charts_humi_options}
                name="Humidity"
            />
        </div>

        
    )
}

export default ChartContainer;