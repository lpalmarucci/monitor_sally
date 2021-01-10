import React, { useEffect, useState } from 'react'

import {Line} from 'react-chartjs-2';

function ChartComponent(props){

    const NUM__PUNTI__DA__DISEGNARE = 10;

    var [data, setData] = useState([]);
    var [labels, setLabels] = useState([]);

    useEffect(() => {
        let len = props.data_from_sheet.length;
        let xValues = [];
        let yValues = [];
        if(len !== 0){
            for(let idx = 0;idx < len;idx++){
                xValues.push(props.data_from_sheet[idx].Time);
                yValues.push(props.data_from_sheet[idx][props.name]);
            }
            if(len > NUM__PUNTI__DA__DISEGNARE){
                for(let idx = 0;idx < len - NUM__PUNTI__DA__DISEGNARE; idx++){
                    xValues.shift();
                    yValues.shift();
                }
            }
        }

        //X
        setLabels(xValues);
        //Y
        setData(yValues);

        
    },[props.data_from_sheet]);

    return (
        <div>
            <Line 
                data={{
                    labels : labels,
                    datasets : [{
                        fill: false,
                        label : props.name,
                        data : data,
                        backgroundColor: props.options.opt_datasets.backgroundColor,
                        borderColor: props.options.opt_datasets.borderColor,
                        borderWidth: 6,
                        pointRadius: 6,
                        pointStyle:"circle",
                        pointBorderWidth: 6,
                        pointHoverBorderWidth : 10,
                        // lineTension : 0
                    }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    title : {
                        display : false,
                        text : "Grafici per la nostra amata sally 🍁"
                    },
                    scales : {
                        yAxes : [{
                            ticks: {
                                // maxTicksLimit: 11,
                                beginAtZero : true,
                                min: props.options.min,
                                max: props.options.max,
                                stepSize: props.options.stepSize
                            }
                        }]
                    }
                }}
            />
        </div>
    )

}

export default ChartComponent;