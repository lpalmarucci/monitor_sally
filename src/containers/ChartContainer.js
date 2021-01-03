import React, {useEffect, useState} from 'react';
import Tabletop from 'tabletop';
import ChartComponent from '../components/ChartComponent';

function ChartContainer(props){
    const [data,setData] = useState([]);

    useEffect(() => {
        Tabletop.init( {
            key: 'https://docs.google.com/spreadsheets/d/18W3JiJbGZPc3IT2YhUlwp2XYH6lnqxG4nqsFGbXsj9o/edit?usp=sharing',
            simpleSheet: true }
          ).then((data) => {
                setData(data);
          })
    });

    return (
        <div>
            {data.map(item => {
                return <h4>Data from Google Drive: {item.humidity} {item.temperature} {item.time}</h4>
            })}
            <ChartComponent data_from_sheet={data} options={props.options}/>
        </div>
    )
}

export default ChartContainer;