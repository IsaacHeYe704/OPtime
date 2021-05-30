import React, {useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import { Redirect } from 'react-router';

export const Chart = (props) => {
    const [labels,setLabels] = useState(props.grupos);
    const [datasets,setDatasets] = useState([
        1,
        10,
        10,
        10  
    ]);
    const [back,setBack] = useState([
        'rgba(54,162,235,0.6)',
        'rgba(255,206,86,0.6)',
        'rgba(200,130,192,0.6)'
    ]);
    useEffect(() => { setLabels(props.grupos); 
        setDatasets(props.datasets);
    });
        return (
        <div className = "chart">
                <Bar
                data={{labels:labels,datasets:[{
                    label:'Pendientes',data:datasets,backgroundColor:back}
                    ]}}
                options={{
                    maintainAspectRatio: false
                }}
                />
        </div>
    )
}

export default Chart;


