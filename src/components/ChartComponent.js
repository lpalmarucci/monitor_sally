import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'

import {Line} from 'react-chartjs-2'

var chart;
function ChartComponent(props){

    const chart = React.createRef();
    var [data, setData] = useState([10,20,50,30,40]);
    var [labels, setLabels] = useState(["15:00","15:05","15:10"]);

    useEffect(() => {
        setTimeout(() => {
            console.log("useEffect");
            data.push(77);
            data.push(23);
            let old_labels = labels.slice();
            old_labels.push("15:15");
            old_labels.push("15:20");
            setLabels(old_labels);
        },1000);
    },[]);

    console.log("return");
    return (
        <div>
            <Line 
                data={{
                    labels : labels,
                    datasets : [{
                        fill: 'start',
                        label : props.name,
                        data : [10,20,15,55,44,100],
                        backgroundColor : ["orange"],
                        borderWidth: 10
                    }]
                }}
                height={400}
                width={600}
                options={{ 
                    maintainAspectRatio: false,
                    scales : {
                        min : 0,
                        max : 100,
                        yAxes : [{
                            ticks: {
                                beginAtZero : true
                            }
                        }],
                        // xAxes : [{
                        //     type: 'time',
                        //     time: {
                        //         displayFormats: {
                        //             quarter: 'h:mm a'
                        //         }
                        //     }
                        // }]
                    }
                }}
                onRef={chart}
            />
        </div>
    )

}

export default ChartComponent;